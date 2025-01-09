import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, ColorPalette } from "@wordpress/components";

registerBlockType("ourblocktheme/blackandwhitesvg", {
  title: "Black & White SVG Background",
  attributes: {
    svgColor: { type: "string", default: "%23dadada" },
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
        className="about-mirage"
        style={{
          background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1025"><polygon points="0,0 1900,0 1900,800 0,1025" fill="${props.attributes.svgColor}" /></svg>')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about-mirage-content">
          <InnerBlocks
            allowedBlocks={[
              "ourblocktheme/videoplayer",
              "ourblocktheme/copy",
              "ourblocktheme/schoolmotto",
            ]}
          />
        </div>
      </section>
    </>
  );
}

function SaveComponent(props) {
  return <InnerBlocks.Content />;
}
