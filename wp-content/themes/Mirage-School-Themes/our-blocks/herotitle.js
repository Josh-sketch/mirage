import { RichText } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/herotitle", {
  title: "Hero Title",
  attributes: {
    text: { type: "string" },
    size: { type: "string", default: "large" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  function handleTextChange(x) {
    props.setAttributes({ text: x });
  }
  return (
    <RichText
      allowedFormats={[]}
      tagName="h1"
      className="hero-title"
      value={props.attributes.text}
      onChange={handleTextChange}
    />
  );
}

function SaveComponent(props) {
  return (
    <>
      <RichText.Content
        tagName="h1"
        className="hero-title"
        value={props.attributes.text}
      />
    </>
  );
}
