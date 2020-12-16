import { Component } from 'react';
import { createPortal } from 'react-dom';
// import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        // console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        // console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            // console.log('Нажали ESC, нужно закрыть модалку');

            this.props.onCloseModal();
        }
    };

    handleBackdropClick = event => {
        // console.log('Кликнули в бекдроп');

        // console.log('currentTarget: ', event.currentTarget);
        // console.log('target: ', event.target);

        if (event.currentTarget === event.target) {
            this.props.onCloseModal();
        }
    };

    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}
