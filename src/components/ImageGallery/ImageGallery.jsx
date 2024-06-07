import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'
export default function ImageGallery({ photos, modalOpen, setModalUrl }) {
  const handlePhotoClick = (photo) => {
		setModalUrl(photo.urls.regular);
		modalOpen();
  };
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} className={css.galleryItem}>
          <ImageCard photo={photo} onPhotoClick={() => handlePhotoClick(photo)} />
        </li>
      ))}
    </ul>
  );
}