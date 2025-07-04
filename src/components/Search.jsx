import StarRating from "./atomic/StarRating";

function Search({ setRatingFilter }) {
  return (
    <div className="serach-bar">
      <div className="filter-by-ratings">
        <button onClick={() => setRatingFilter(4.5)}>
          <StarRating rating={4.5} />
        </button>
        <button onClick={() => setRatingFilter(4)}>
          <StarRating rating={4} />
        </button>
        <button onClick={() => setRatingFilter(3.5)}>
          <StarRating rating={3.5} />
        </button>
      </div>
    </div>
  );
}

export default Search;
