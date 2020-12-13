import { Component } from 'react';
import imageAPI from '../imageAPI';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

export default class ImageInfo extends Component {
    state = {
        image: null,
        error: null,
        status: Status.IDLE,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.imageName !== this.props.imageName) {
            this.setState({ status: Status.PENDING });
            imageAPI
                .fetchImages(this.props.imageName)
                .then(data => {
                    console.log(data.hits);
                    return data.hits;
                })
                .then(image =>
                    this.setState({ image, status: Status.RESOLVED }),
                )
                .catch(error =>
                    this.setState({ error, status: Status.REJECTED }),
                );
        }
    }

    render() {
        const { image, error, status } = this.state;
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
                    <li className="ImageGalleryItem">
                        <img
                            src={image[0].webformatURL}
                            alt=""
                            className="ImageGalleryItem-image"
                        />
                    </li>
                </div>
            );
        }
    }
}
