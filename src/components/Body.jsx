import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import ShimmerCard from "./ShimmerCard";
import Filter from "./Filter";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(2.5);

  useEffect(() => {
    fetchData();
  }, [ratingFilter]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.5203896&lng=73.8567005&str=lunch&trackingId=undefined&submitAction=ENTER&queryUniqueId=91901e97-45fb-e29f-bfda-f85244a9e203&selectedPLTab=RESTAURANT"
    );

    const json = await data.json();

    const resturants =
      json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;

    const updatedList = resturants.filter((card) => {
      return card?.card?.card?.info?.avgRating >= ratingFilter;
    });

    setListOfResturant(updatedList);
    setFilteredResturant(updatedList);
  };

  if (useOnlineStatus() === false)
    return <p>Check your internent connection</p>;

  return filteredResturant.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <Filter
        listOfResturant={listOfResturant}
        setFilteredResturant={setFilteredResturant}
        setRatingFilter={setRatingFilter}
      />
      <div className="cards-container">
        {filteredResturant.map((data) => (
          <Link
            key={data?.card?.card?.info?.id}
            to={"/restaurants/" + data?.card?.card?.info?.id}
          >
            <Card key={data?.card?.card?.info?.id} data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
