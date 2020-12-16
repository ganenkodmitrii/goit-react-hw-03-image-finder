import { Component } from 'react';
import imageAPI from '../imageAPI';

import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

export default class ImageInfo extends Component {
    state = {
        images: [],
        error: null,
        status: 'idle',
        page: 1,
        //     // showModal: false,
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchImage !== this.props.searchImage) {
            this.setState({ status: 'pending', page: 1 });

            imageAPI
                .fetchImages(this.props.searchImage, this.state.page)
                .then(data =>
                    this.setState({
                        images: data.hits,
                        status: 'resolved',
                    }),
                );
        }
    }

    handleBtnChangePage = () => {
        const nextPage = this.state.page + 1;
        this.setState({
            page: this.state.page + 1,
        });

        imageAPI.fetchImages(this.props.searchImage, nextPage).then(data =>
            this.setState(({ images }) => ({
                images: [...images, ...data.hits],
            })),
        );
    };
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
                <div style={{ padding: 10 }}>
                    <ImageGallery images={images} />
                    <Button loadMoreBtn={this.handleBtnChangePage} />
                </div>
            );
        }
    }
}
