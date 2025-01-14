import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType("ourblocktheme/copy", {
  title: "Copy",
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  return (
    <div className="about-text">
      <InnerBlocks
        allowedBlocks={["ourblocktheme/copytext", "ourblocktheme/buttonsblock"]}
      />
    </div>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
