/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";

// import data from "./mocks/resturentMenu.json";
jest.mock("../hooks/useRestaurantMenu", () => {
  const data = require("./mocks/resturentMenu.json");
  return {
    __esModule: true,
    default: () => data,
  };
});

import ResturantMenu from "../components/RestaruantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import appStore from "../store/appStore";
import { Provider } from "react-redux";

// beforeEach(() => {
//   global.fetch = jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(data), // must be { data: { cards: [...] } }
//     })
//   );
// });

describe("Stimulate Add to Cart Functionality", () => {
  it("Should load resturant menu component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ResturantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const accordianHeader = screen.getByRole("button", {
      name: "Mini Lunchbox (7)",
    });

    // fire the click
    fireEvent.click(accordianHeader);

    // wait for DOM to reflect change
    await waitFor(() => {
      expect(screen.getAllByTestId("foodItems").length).toBe(7);
    });

    const addBtn = screen.getAllByRole("button", { name: "ADD TO CART" });
    const OneCartItems = screen.getByTestId("cartItems");
    fireEvent.click(addBtn[0]);
    expect(OneCartItems.textContent).toBe("1");

    const TwoCartItems = screen.getByTestId("cartItems");
    fireEvent.click(addBtn[0]);
    expect(TwoCartItems.textContent).toBe("2");

    const itemsAddedToCart = screen.getAllByTestId("itemsAddedToCart");
    expect(itemsAddedToCart.length).toBe(2);

    const clearCartBtn = screen.getByTestId("clearCart");
    console.log(clearCartBtn);
    fireEvent.click(clearCartBtn);
  });
});
