import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType("ourblocktheme/titleblock", {
  title: "Title Block",
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  return (
    <div class="lifestyle-title">
      <div>
        <InnerBlocks allowedBlocks={["ourblocktheme/copytext"]} />
      </div>
    </div>
  );
}

function SaveComponent(props) {
  return <InnerBlocks.Content />;
}
