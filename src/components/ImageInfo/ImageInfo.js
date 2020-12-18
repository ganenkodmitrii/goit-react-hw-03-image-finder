import { Component } from 'react';
import ImageAPI from '../ImageAPI/ImageAPI';
import PropTypes from 'prop-types';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import Loading from '../Loading';
import ImagesError from '../ImagesError';
import ImagesNotFound from '../ImagesNotFound';

export default class ImageInfo extends Component {
    state = {
        images: [],
        error: null,
        status: 'idle',
        page: 1,
        showModal: false,
        imageModal: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchImage !== this.props.searchImage) {
            this.setState({ status: 'pending', page: 1 });

            ImageAPI.fetchImages(this.props.searchImage, this.state.page)
                .then(data => {
                    this.setState({
                        images: data.hits,
                        status: 'resolved',
                    });
                })
                // ???Catch не работает :(
                .catch(error => {
                    this.setState({
                        error: error,
                        status: 'rejected',
                    });
                });
        }
    }

    handleBtnChangePage = () => {
        const nextPage = this.state.page + 1;
        this.setState({
            page: this.state.page + 1,
        });

        ImageAPI.fetchImages(this.props.searchImage, nextPage).then(data =>
            this.setState(({ images }) => ({
                images: [...images, ...data.hits],
            })),
        );

        this.handleScroll();
    };

    handleScroll = () => {
        setTimeout(() => {
            window.scrollBy({
                top: document.documentElement.clientHeight - 160,
                behavior: 'smooth',
            });
        }, 1000);
    };

    render() {
        const { images, error, status } = this.state;

        if (status === 'idle') {
            return <div style={{ textAlign: 'center' }}>Введите в поиск</div>;
        }

        if (status === 'pending') {
            return <Loading />;
        }

        if (status === 'rejected') {
            return <ImagesError message={error.message} />;
        }

        if (status === 'resolved') {
            return images.length ? (
                <div style={{ margin: '0 auto', padding: 10 }}>
                    <ImageGallery images={images} />
                    <Button loadMoreBtn={this.handleBtnChangePage} />
                </div>
            ) : (
                <ImagesNotFound />
            );
        }
    }
}
ImageInfo.propTypes = {
    images: PropTypes.array,
    error: PropTypes.string,
    status: PropTypes.string,
    page: PropTypes.number,
    showModal: PropTypes.bool,
    imageModal: PropTypes.string,
    searchImage: PropTypes.string,
};
