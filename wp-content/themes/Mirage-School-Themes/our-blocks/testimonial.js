import { registerBlockType } from "@wordpress/blocks";
import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  ColorPalette,
  getColorObjectByColorValue,
} from "@wordpress/block-editor";

registerBlockType("ourblocktheme/testimonial", {
  title: "Testimonial",
  attributes: {
    imgID: { type: "number" },
    imgURL: { type: "string", default: testimonial.fallbackimage },
    textColor: { type: "string", default: "lightYellow" },
    textSize: { type: "string", default: "large" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  useEffect(
    function () {
      if (props.attributes.imgID) {
        async function go() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID}`,
            method: "GET",
          });
          props.setAttributes({
            imgURL: response.media_details.sizes.pageBanner.source_url,
          });
          console.log(props.attributes.imgURL);
        }
        go();
      }
    },
    [props.attributes.imgID]
  );
  function onFileSelect(x) {
    props.setAttributes({ imgID: x.id });
  }

  const ourColors = [
    { name: "white", color: "#ffffff" },
    { name: "lightRed", color: "#f03e3e" },
    { name: "lightYellow", color: "#e2c629f3" },
    { name: "lightBlue", color: "#1c7ed6" },
  ];

  const currentColorValue = ourColors.filter((color) => {
    return color.name == props.attributes.textColor;
  })[0].color;

  function handleColorChange(colorCode) {
    const { name } = getColorObjectByColorValue(ourColors, colorCode);
    console.log(name);
    props.setAttributes({ textColor: name });
  }
  return (
    <>
      <InspectorControls>
        <PanelBody>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={props.attributes.imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>;
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>

        <PanelBody title="Testmonial text size">
          <PanelRow>
            <Button
              isPrimary={props.attributes.textSize === "large"}
              onClick={() => props.setAttributes({ textSize: "large" })}
            >
              Large
            </Button>
            <Button
              isPrimary={props.attributes.textSize === "medium"}
              onClick={() => props.setAttributes({ textSize: "medium" })}
            >
              Medium
            </Button>
            <Button
              isPrimary={props.attributes.textSize === "small"}
              onClick={() => props.setAttributes({ textSize: "small" })}
            >
              Small
            </Button>
          </PanelRow>
        </PanelBody>

        <PanelBody
          title="Testmonial Author's Name Text color"
          initialOpen={true}
        >
          <PanelRow>
            <ColorPalette
              colors={ourColors}
              value={currentColorValue}
              onChange={handleColorChange}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div
        className="testimonial"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
        url('${props.attributes.imgURL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="testimonial-container">
          <div className="testimonial-text active">
            <div className={`size-${props.attributes.textSize}`}>
              This block displays the recent five(5) testimonials/reviews of the
              testimonial custom post type. You can change the background image,
              text size and text color using the settings in the right panel of
              the block editor. Have Fun.
            </div>

            <span
              className={`testimonial-author ${props.attributes.textColor}`}
            >
              Testimonial Author's Name
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return null;
}
