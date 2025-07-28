import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import ResturantSummary from "./ResturantSummary";
import { useState } from "react";
import Accordian from "./Accordian";

function RestaruantMenu() {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) return <h1>Loading : Shimmer Ui</h1>;

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (card) =>
        card.card?.card["@type"]?.includes(
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    );

  return (
    <div className="mx-20">
      <ResturantSummary details={restaurantInfo?.cards[2]?.card?.card?.info} />
      {categories?.map((card, index) => {
        const resturantDetails = {
          name: restaurantInfo?.cards[2]?.card?.card?.info.name,
          area: restaurantInfo?.cards[2]?.card?.card?.info.locality,
        };
        const categoryId = card?.card?.card?.categoryId;
        const categoryTitle = card?.card?.card?.title;
        const itemCards = card?.card?.card?.itemCards;
        return (
          <Accordian
            key={categoryId}
            index={index}
            title={categoryTitle}
            items={itemCards}
            show={index === showIndex ? true : false}
            setShowIndex={setShowIndex}
            resturantDetails={resturantDetails}
          />
        );
      })}
    </div>
  );
}

export default RestaruantMenu;
