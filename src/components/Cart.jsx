import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faTrash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { clearCart, removeItem } from "../store/cartSlice";

function Cart() {
  const items = useSelector((store) => store.cart.items);

  if (items && items?.length === 0) return <h1>Cart is Empty</h1>;

  const resturantDetails = items[0]?.resturantDetails;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="flex justify-center pb-32">
      <div
        className="w-[70%] px-12 py-10 shadow-xl bg-white 
        text-stone-600 flex flex-col  gap-4
        relative"
      >
        <div>
          <div className="border-b-2 px-4">
            <h1 className="text-xl font-bold">{resturantDetails?.name}</h1>
            <h4 className="font-semibold text-stone-400">
              {resturantDetails?.area}
            </h4>
          </div>

          {items.map((item) => {
            const { id, name, price, isVeg } = item;
            return (
              <div key={id} className="flex  items-center py-2 ">
                <div className="w-[65%]">
                  <span>{isVeg ? "🟢" : "🔴"}</span>
                  <span>{name}</span>
                </div>
                <div
                  className="w-24 border-2 border-stone-200 
                  px-4 flex justify-between 
                  text-green-600 font-bold "
                >
                  <button className="cursor-pointer">-</button>
                  <span className="font-semibold">{1}</span>
                  <button className="cursor-pointer">+</button>
                </div>
                <div className="ml-auto">&#8377;{price / 100}</div>
                <button
                  className="ml-4 cursor-pointer"
                  onClick={handleRemoveItem}
                >
                  <FontAwesomeIcon icon={faTimes} className="text-red-600 " />
                </button>
              </div>
            );
          })}
          <button
            className="w-full border border-stone-200
               font-semibold py-2 text-sm tracking-widest
               shadow cursor-pointer hover:bg-stone-200"
            onClick={handleClearCart}
          >
            CLEAR CART
            <FontAwesomeIcon icon={faTrash} className="text-red-500 pl-2" />
          </button>
        </div>
        <input
          type="text"
          className="w-full px-4 py-4  bg-stone-50 placeholder:p-4 "
          placeholder="Any suggestions? We will pass it on..."
        />
        <div className="flex items-start gap-8 border-1 px-4 py-2">
          <input type="checkbox" className="mt-2 w-6 h-6" />
          <div>
            <h1 className="font-bold">Opt in for No-contact Delivery</h1>
            <p>
              Unwell, or avoiding contact? Please select no-contact delivery.
              Partner will safely place the order outside your door (not for
              COD)
            </p>
          </div>
        </div>
        <div className="border border-dashed px-4 py-4 font-semibold">
          <FontAwesomeIcon icon={faTags} /> Apply Coupon
        </div>
        <div className="flex flex-col gap-1 border-b-2 border-stone-400 pb-4">
          <h1 className="font-bold text-lg">Bill Details</h1>
          <div className="flex justify-between">
            <span>Item Total</span>
            <span>100</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee | 8.3 kms</span>
            <span>98</span>
          </div>
          <div className="flex justify-between">
            <span>Extra discount for you</span>
            <span>-100</span>
          </div>
        </div>
        <div className="flex justify-between border-b-2 border-stone-600 pb-4">
          <span>GST & Other Charges</span>
          <span>40</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>TO PAY</span>
          <span>40</span>
        </div>
        <button
          className="absolute -bottom-16 left-0 w-full
         bg-green-600 text-stone-50 font-semibold py-2
         shadow-xl cursor-pointer hover:bg-green-700"
        >
          PROCEED TO PAY
        </button>
      </div>
    </div>
  );
}

export default Cart;
