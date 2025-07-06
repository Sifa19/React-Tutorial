import { useEffect, useState } from "react";
import Card from "./Card";
import ShimmerCard from "./ShimmerCard";

const Body = ({ ratingFilter }) => {
  const [listOfResturant, setListOfResturant] = useState([]);

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
  };

  return listOfResturant.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="cards-container">
        {listOfResturant.map((data) => (
          <Card key={data?.card?.card?.info?.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
