import StarRating from "./atomic/StarRating";
import Search from "./Search";

function Filter({ listOfResturant, setFilteredResturant, setRatingFilter }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row justify-evenly">
      <Search
        listOfResturant={listOfResturant}
        setFilteredResturant={setFilteredResturant}
      />
      <div className="flex items-center justify-center gap-4">
        <button data-testid="starRating" onClick={() => setRatingFilter(4.5)}>
          <StarRating rating={4.5} />
        </button>
        <button data-testid="starRating" onClick={() => setRatingFilter(4)}>
          <StarRating rating={4} />
        </button>
        <button data-testid="starRating" onClick={() => setRatingFilter(3.5)}>
          <StarRating rating={3.5} />
        </button>
      </div>
    </div>
  );
}

export default Filter;
