import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/slidebutton", {
  title: "Slide Button",
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  return (
    <button class="slide-btn">
      <a class="hero-btn" href="#">
        Learn More
      </a>
    </button>
  );
}

function SaveComponent() {
  return null;
}
