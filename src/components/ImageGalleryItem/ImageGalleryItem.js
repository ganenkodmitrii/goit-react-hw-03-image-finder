export default function ImageGalleryItem({ id, webformatURL }) {
    return (
        <li className="ImageGalleryItem" key={id}>
            <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
        </li>
    );
}
