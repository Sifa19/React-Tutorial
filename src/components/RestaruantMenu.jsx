import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

function RestaruantMenu() {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    //console.log(json?.data?.cards);
    setRestaurantInfo(json?.data);
  };

  if (restaurantInfo === null) return <h1>Loading : Shimmer Ui</h1>;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card
      .card;

  //console.log(itemCards);

  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <span>{costForTwoMessage}</span>
        <ul>
          {itemCards.map((data) => {
            const { id, name, price } = data?.card?.info;
            return (
              <li key={id}>
                {name} - {price / 100 || ""}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaruantMenu;
