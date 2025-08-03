import { useState } from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

function DishCard({ data, resturantDetails }) {
  const [show, setShow] = useState(false);
  const { isVeg, inStock, name, price, ratings, description, imageId } = data;
  const { rating, ratingCount } = ratings.aggregatedRating;
  const imgSrc = IMAGE_CDN_URL + imageId;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    console.log(resturantDetails);
    const newData = { ...data, resturantDetails };
    console.log(newData);
    dispatch(addItem(newData));
  };

  if (inStock <= 0) return;
  return (
    <div
      data-testid="foodItems"
      className="p-4 h-[200px] w-full mb-4 flex justify-between  border-b-2 border-stone-200"
    >
      <div className="w-[70%] flex flex-col gap-1">
        <span className="font-medium">{isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</span>
        <span className="font-bold">{name}</span>
        <span className="font-bold">&#8377;{price / 100}</span>
        <span className="text-sm flex items-center gap-0.5">
          {rating ? <i className="fas fa-star text-green-400 "></i> : ""}
          {rating ? `${rating} (${ratingCount})` : ""}
        </span>
        <div className="text-xs pr-8">
          {description && (
            <>
              <span>
                {show ? description : description?.slice(0, 50) + "..."}
              </span>
              <button
                className="underline pl-2"
                onClick={() => setShow((s) => !s)}
              >
                {show ? "less" : "more"}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="w-[25%] h-[150px] relative">
        {imageId && (
          <img
            className="w-[150px] h-[150px] rounded-lg "
            src={imgSrc}
            alt={name}
          />
        )}
        <button
          className="bg-white border-1 border-stone-200  text-xs font-bold text-green-400
            px-4 py-2 rounded-lg absolute -bottom-3 left-[10%] cursor-pointer
            hover:bg-stone-200"
          onClick={handleAddItem}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default DishCard;
