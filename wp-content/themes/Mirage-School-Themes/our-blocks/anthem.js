import { registerBlockType } from "@wordpress/blocks";
import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

registerBlockType("ourblocktheme/anthem", {
  title: "School Anthem",
  attributes: {
    imgID: { type: "number" },
    imgURL: { type: "string", default: anthem.fallbackimage },
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

      <section
        id="anthem"
        class="school-pledge"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
          url('${props.attributes.imgURL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>School Anthem</h2>
        <div class="anthem-flex">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            consequuntur iste error odio! Cumque a, ea, ad iste praesentium
            ratione voluptas nobis harum molestias earum ullam inventore ducimus
            fugit saepe? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Explicabo consequuntur iste error odio! Cumque a, ea, ad iste
            praesentium ratione voluptas nobis harum molestias earum ullam
            inventore ducimus fugit saepe?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            consequuntur iste error odio! Cumque a, ea, ad iste praesentium
            ratione voluptas nobis harum molestias earum ullam inventore ducimus
            fugit saepe? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Explicabo consequuntur iste error odio! Cumque a, ea, ad iste
            praesentium ratione voluptas nobis harum molestias earum ullam
            inventore ducimus fugit saepe?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            consequuntur iste error odio! Cumque a, ea, ad iste praesentium
            ratione voluptas nobis harum molestias earum ullam inventore ducimus
            fugit saepe? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Explicabo consequuntur iste error odio! Cumque a, ea, ad iste
            praesentium ratione voluptas nobis harum molestias earum ullam
            inventore ducimus fugit saepe?
          </p>
        </div>
      </section>
    </>
  );
}

function SaveComponent() {
  return null;
}
