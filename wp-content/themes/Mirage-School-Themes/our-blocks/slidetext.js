import { registerBlockType } from "@wordpress/blocks";
import { RichText, BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";

registerBlockType("ourblocktheme/slidetext", {
  title: "slidetext",
  attributes: {
    text: { type: "string" },
    size: { type: "string", default: "large" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function tagAndClass(props) {
  if (props.attributes.size === "large") {
    return { tagName: "h1", className: "slide-title" };
  }
  if (props.attributes.size === "small") {
    return { tagName: "span", className: "text-span" };
  }
  // Default fallback
  return { tagName: "span", className: "text-span" };
}

function EditComponent(props) {
  const { tagName: TagName, className } = tagAndClass(props);
  function handleTextChange(x) {
    props.setAttributes({ text: x });
  }
  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={props.attributes.size === "large"}
            onClick={() => {
              props.setAttributes({ size: "large" });
            }}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size === "small"}
            onClick={() => {
              props.setAttributes({ size: "small" });
            }}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText
        allowedFormats={["core/italic"]}
        tagName={TagName}
        className={className}
        value={props.attributes.text}
        onChange={handleTextChange}
      />
    </>
  );
}

function SaveComponent(props) {
  const { tagName: TagName, className } = tagAndClass(props);
  return (
    <RichText.Content
      tagName={TagName}
      className={className}
      value={props.attributes.text}
    />
  );
}
