import { useState } from "../../node_modules/react";

function Search({ listOfResturant, setFilteredResturant }) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex items-center justify-center">
      <input
        data-testid="searchInput"
        className="
        border border-gray-950 
        rounded-2xl pl-4 mr-2
        focus:shadow-lg outline-0"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        data-testid="search"
        className=" text-xl cursor-pointer hover:text-shadow-lg"
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
