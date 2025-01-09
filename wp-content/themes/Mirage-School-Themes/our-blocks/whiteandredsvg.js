import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, ColorPalette } from "@wordpress/components";

registerBlockType("ourblocktheme/whiteandredsvg", {
  title: "White & Red SVG Background",
  attributes: {
    svgColor: { type: "string", default: "%23a60000" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const ourColors = [
    { name: "grey", color: "#dadada" },
    { name: "darkRed", color: "#a60000" },
    { name: "darkYellow", color: "#a2923b" },
    { name: "darkBlue", color: "#1864ab" },
  ];

  function handleColorChange(colorCode) {
    const encodedColor = colorCode.replace("#", "%23");
    props.setAttributes({ svgColor: encodedColor });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette
              colors={ourColors}
              value={props.attributes.svgColor.replace("%23", "#")}
              onChange={handleColorChange}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <section
        className="lifestyle"
        style={{
          background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1000"><polygon points="0,400 1900,700 1900,1000 0,1000" fill="${props.attributes.svgColor}" /></svg>')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <InnerBlocks
          allowedBlocks={[
            "ourblocktheme/titleblock",
            "ourblocktheme/copy",
            "ourblocktheme/gallery",
          ]}
        />
      </section>
    </>
  );
}

function SaveComponent(props) {
  return <InnerBlocks.Content />;
}
