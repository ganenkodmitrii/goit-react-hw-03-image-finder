import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images }) {
    return <ul className="ImageGallery">{images.map(ImageGalleryItem)}</ul>;
}
