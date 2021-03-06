import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
export default class ImageGallery extends Component {
    state = {
        showModal: false,
        imageModal: '',
    };

    openModal = largeImageURL => {
        this.setState({
            showModal: true,
            imageModal: largeImageURL,
        });
    };

    closeModal = () => {
        this.setState({
            showModal: false,
        });
    };

    render() {
        const { showModal, imageModal } = this.state;
        return (
            <>
                <ul className="ImageGallery">
                    {this.props.images.map(el => (
                        <ImageGalleryItem
                            key={el.id}
                            webformatURL={el.webformatURL}
                            largeImageURL={el.largeImageURL}
                            clickOnImageItem={this.openModal}
                        />
                    ))}
                </ul>
                {showModal && (
                    <Modal onCloseModal={this.closeModal}>
                        {
                            <img
                                style={{ height: 540 }}
                                src={imageModal}
                                alt=""
                            />
                        }
                    </Modal>
                )}
            </>
        );
    }
}
ImageGalleryItem.propTypes = {
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),

    showModal: PropTypes.bool,
    imageModal: PropTypes.string,
};
