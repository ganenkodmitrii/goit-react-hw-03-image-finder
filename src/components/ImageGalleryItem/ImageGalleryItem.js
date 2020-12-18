import PropTypes from 'prop-types';

export default function ImageGalleryItem({
    webformatURL,
    largeImageURL,
    clickOnImageItem,
}) {
    return (
        <li
            onClick={() => clickOnImageItem(largeImageURL)}
            className="ImageGalleryItem"
        >
            <img
                src={webformatURL}
                url={largeImageURL}
                alt=""
                className="ImageGalleryItem-image"
            />
        </li>
    );
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    clickOnImageItem: PropTypes.func,
};
