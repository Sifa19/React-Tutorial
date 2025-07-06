import StarRating from "./atomic/StarRating";
import Search from "./Search";

function Filter({ listOfResturant, setFilteredResturant, setRatingFilter }) {
  return (
    <div className="filters">
      <Search
        listOfResturant={listOfResturant}
        setFilteredResturant={setFilteredResturant}
      />
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

export default Filter;
