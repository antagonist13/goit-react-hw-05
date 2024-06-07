import css from './ImageCard.module.css'
export default function ImageCard({ photo, onPhotoClick }) {
  return (
    <div>
      <img
        onClick={onPhotoClick}
        className={css.galleryItemPhoto}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
}