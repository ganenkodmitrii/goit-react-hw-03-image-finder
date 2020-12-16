import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images }) {
    return (
        <ul className="ImageGallery">
            {images.map(el => (
                <ImageGalleryItem
                    key={el.id}
                    webformatURL={el.webformatURL}
                    largeImageURL={el.largeImageURL}
                    // clickOnImageItem={this.openModal}
                />
            ))}
        </ul>
    );
}
