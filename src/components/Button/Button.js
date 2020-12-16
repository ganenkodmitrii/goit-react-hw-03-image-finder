export default function Button({ loadMoreBtn }) {
    return (
        <div className="BoxBtn">
            <button type="button" className="Button" onClick={loadMoreBtn}>
                Load more
            </button>
        </div>
    );
}
