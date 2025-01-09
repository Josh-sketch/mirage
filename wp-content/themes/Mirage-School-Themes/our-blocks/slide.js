import { registerBlockType } from "@wordpress/blocks";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, Button } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";

registerBlockType("ourblocktheme/slide", {
  title: "slide",
  attributes: {
    imgID: { type: "number" },
    imgURL: { type: "string", default: slide.fallbackimage },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  useEffect(
    function () {
      if (props.attributes.imgID) {
        async function hello() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID}`,
            method: "GET",
          });
          props.setAttributes({
            imgURL: response.media_details.sizes.slidePhoto.source_url,
          });
          console.log(props.attributes.imgURL);
        }
        hello();
      }
    },
    [props.attributes.imgID]
  );
  function onFileSelect(x) {
    props.setAttributes({ imgID: x.id });
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
      </InspectorControls>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
            url('${props.attributes.imgURL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="slide backend"
      >
        <div className="slideshow-texts">
          <div className="full-width">
            <InnerBlocks
              allowedBlocks={[
                "ourblocktheme/slidetext",
                "ourblocktheme/slidebutton",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
