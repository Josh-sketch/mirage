import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/videoplayer", {
  title: "Video Player",
  attributes: {
    videoURL: { type: "string", default: videoplayer.fallbackimage },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  return (
    <>
      <div className="about-video">
        <img className="school-video" src={`${props.attributes.videoURL}`} />
        <ion-icon name="play-circle-outline"></ion-icon>
      </div>
    </>
  );
}

function SaveComponent(props) {
  return (
    <div className="about-video">
      <img className="school-video" src={`${props.attributes.videoURL}`} />
      <ion-icon name="play-circle-outline"></ion-icon>
    </div>
  );
}
