import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import { PanelBody, PanelRow, Button } from "@wordpress/components";

registerBlockType("ourblocktheme/gallery", {
  title: "Gallery",
  attributes: {
    photos: {
      type: "array",
      default: [],
    },
    photoIDs: {
      type: "array",
      default: [],
    },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const { photos, photoIDs } = attributes;

  // Fetch images from the database based on selected IDs
  useEffect(() => {
    if (photoIDs.length > 0) {
      async function fetchPhotos() {
        const promises = photoIDs.map((id) =>
          apiFetch({ path: `/wp/v2/media/${id}` })
        );

        const results = await Promise.all(promises);
        const updatedPhotos = results.map((media) => ({
          id: media.id,
          url: media.media_details.sizes.full.source_url, // Adjust size as needed
          alt: media.alt_text || "",
        }));

        setAttributes({ photos: updatedPhotos });
      }

      fetchPhotos();
    }
  }, [photoIDs]);

  const onSelectPhotos = (selectedPhotos) => {
    const ids = selectedPhotos.map((photo) => photo.id);
    setAttributes({ photoIDs: ids }); // Set IDs for fetching
  };

  return (
    <div className="lifestyle-gallery">
      <InspectorControls>
        <PanelBody title="Gallery Settings">
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectPhotos}
                allowedTypes={["image"]}
                multiple
                gallery
                value={photoIDs}
                render={({ open }) => (
                  <Button onClick={open} isPrimary>
                    Choose Images
                  </Button>
                )}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      {photos.length > 0 ? (
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.url}
              alt={photo.alt || `Gallery photo ${index + 1}`}
            />
          ))}
        </div>
      ) : (
        <p>No images selected. Use the block inspector to add images.</p>
      )}
    </div>
  );
}

function SaveComponent(props) {
  const { attributes } = props;
  const { photos } = attributes;

  return (
    <div className="lifestyle-gallery">
      {photos.length > 0 ? (
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.url}
              alt={photo.alt || `Gallery photo ${index + 1}`}
            />
          ))}
        </div>
      ) : (
        <p>No images selected.</p>
      )}
    </div>
  );
}
