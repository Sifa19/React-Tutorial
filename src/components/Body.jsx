import { useState } from "react";
import Search from "./Search";
import Card from "./Card";
import { cards } from "../utils/mockData";
import Tab from "./atomic/Tab";

const Body = () => {
  const [ratingFilter, setRatingFilter] = useState(4);

  const listOfResturant = cards.filter(
    (card) => card.card.avgRating >= ratingFilter
  );

  return (
    <div className="body">
      <Search setRatingFilter={setRatingFilter} />
      <div className="cards-container">
        {listOfResturant.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
