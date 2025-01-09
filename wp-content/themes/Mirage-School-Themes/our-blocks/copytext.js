import { registerBlockType } from "@wordpress/blocks";
import { RichText, BlockControls } from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";

registerBlockType("ourblocktheme/copytext", {
  title: "Copy text",
  attributes: {
    text: { type: "string" },
    tagName: { type: "string", default: "paragraph" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

const getTag = (tagName) => {
  switch (tagName) {
    case "paragraph":
      return "p";
    case "heading":
      return "h2";
    case "span":
      return "span";
    default:
      return "p";
  }
};

function EditComponent(props) {
  function handleTextChange(x) {
    props.setAttributes({ text: x });
  }
  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={props.attributes.tagName === "heading"}
            onClick={() => {
              props.setAttributes({ tagName: "heading" });
            }}
          >
            Heading
          </ToolbarButton>

          <ToolbarButton
            isPressed={props.attributes.tagName === "paragraph"}
            onClick={() => {
              props.setAttributes({ tagName: "paragraph" });
            }}
          >
            Paragraph
          </ToolbarButton>

          <ToolbarButton
            isPressed={props.attributes.tagName === "span"}
            onClick={() => {
              props.setAttributes({ tagName: "span" });
            }}
          >
            Span
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText
        allowedFormats={["core/italic", "core/bold"]}
        tagName={getTag(props.attributes.tagName)}
        value={props.attributes.text}
        onChange={handleTextChange}
      />
    </>
  );
}

function SaveComponent(props) {
  return (
    <RichText.Content
      tagName={getTag(props.attributes.tagName)}
      value={props.attributes.text}
    />
  );
}
