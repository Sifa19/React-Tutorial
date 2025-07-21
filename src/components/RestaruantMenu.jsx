import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

function RestaruantMenu() {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) return <h1>Loading : Shimmer Ui</h1>;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card
      .card;

  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <span>{costForTwoMessage}</span>
        <ul>
          {itemCards?.map((data) => {
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
