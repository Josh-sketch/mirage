import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/banner", {
  title: "Banner",

  attributes: {
    imgID: { type: "number" },
    imgURL: { type: "string", default: banner.fallbackimage },
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
        className="about-hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
        url('${props.attributes.imgURL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <InnerBlocks allowedBlocks={["ourblocktheme/herotitle"]} />
      </div>
    </>
  );
}

function SaveComponent(props) {
  return <InnerBlocks.Content />;
}
