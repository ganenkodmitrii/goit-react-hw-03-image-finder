import PropTypes from 'prop-types';

export default function ImagesErrorView({ message }) {
    return (
        <div role="alert">
            <p>Извините, что-то пошло не так. Error: {message}</p>
        </div>
    );
}
ImagesErrorView.propTypes = {
    message: PropTypes.string,
};
