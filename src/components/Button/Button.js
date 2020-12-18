import PropTypes from 'prop-types';
export default function Button({ loadMoreBtn }) {
    return (
        <div className="BoxBtn">
            <button type="button" className="Button" onClick={loadMoreBtn}>
                Load more
            </button>
        </div>
    );
}
Button.propTypes = {
    loadMoreBtn: PropTypes.func,
};
