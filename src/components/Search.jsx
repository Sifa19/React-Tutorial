import { useState } from "../../node_modules/react";

function Search({ listOfResturant, setFilteredResturant }) {
  const [searchText, setSearchText] = useState("");
  console.log("search render");
  return (
    <div className="search">
      <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setFilteredResturant(() => {
            return listOfResturant.filter((card) =>
              (card?.card?.card?.info?.name)
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
          });
        }}
      >
        🔍
      </button>
    </div>
  );
}

export default Search;
