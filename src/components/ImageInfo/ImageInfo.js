import { Component } from 'react';
import imageAPI from '../imageAPI';

import ImageGallery from '../ImageGallery/ImageGallery';

export default class ImageInfo extends Component {
    state = {
        images: [],
        error: null,
        status: 'idle',
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.imageName !== this.props.imageName) {
            this.setState({ status: 'pending' });
            imageAPI
                .fetchImages(this.props.imageName)
                // .then(data => {
                //     console.log(data.hits);
                //     return data.hits;
                // })
                .then(image =>
                    this.setState({ images: image.hits, status: 'resolved' }),
                );
            // .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }

    render() {
        const { images, error, status } = this.state;
        // const { imageName } = this.props;

        if (status === 'idle') {
            return <div>add name image</div>;
        }

        if (status === 'pending') {
            return <div>Update...</div>;
        }

        if (status === 'rejected') {
            return <div>{error.message}</div>;
        }

        if (status === 'resolved') {
            return (
                <div>
                    {/* <li className="ImageGalleryItem">
                        <img
                            src={images[0].webformatURL}
                            alt=""
                            className="ImageGalleryItem-image"
                        />
                    </li> */}
                    <ImageGallery images={images} />
                </div>
            );
        }
    }
}
