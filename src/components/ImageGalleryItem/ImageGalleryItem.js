export default function ImageGalleryItem({
    webformatURL,
    largeImageURL,
    // clickOnImageItem,
}) {
    return (
        <li className="ImageGalleryItem">
            <img
                src={webformatURL}
                url={largeImageURL}
                alt=""
                className="ImageGalleryItem-image"
                // onClick={onClick(webformatURL)}
            />
        </li>
    );
}
