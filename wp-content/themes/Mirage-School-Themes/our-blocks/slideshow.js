import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
registerBlockType("ourblocktheme/slideshow", {
  title: "slideshow",
  attributes: {},
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  return (
    <section className="slideshow">
      <InnerBlocks allowedBlocks={["ourblocktheme/slide"]} />
    </section>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
