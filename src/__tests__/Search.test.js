/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import { act, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import data from "./mocks/Body.json";
import { BrowserRouter } from "react-router-dom";

// Runs only once before all tests in a describe block
// (or the whole file if outside).
beforeAll(() => {});
//mock the fetch data
// Runs before every individual test inside a describe
// block (or the whole file if outside).
beforeEach(() => {
  (global.navigator.geolocation = {
    //mock the getCurrentPosition function
    /*
    1. How getCurrentPosition Works in the Real Browser js

        - navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        - It doesn’t return anything.
        - It calls successCallback(position) once location is retrieved.
        - position is an object like:
            {
                coords: {
                    latitude: 28.6448,
                    longitude: 77.216721,
                }
            }

    2. getCurrentPosition: jest.fn(...)
        - jest.fn() is used to create a mock function.
        - This replaces the browser's actual getCurrentPosition method 
          with a fake one that behaves the way we want in tests.
        - getCurrentPosition expects a callback function as its first argument. 
          This is the successCallback.
        - successCallback({ coords: { latitude: " 28.644800", longitude: " 77.216721" } }) 
          mocks the getCurrentPosition

So, in the test, we simulate what the browser would do: we call the successCallback.
    */

    getCurrentPosition: jest.fn((successCallback) => {
      successCallback({
        coords: { latitude: " 28.644800", longitude: " 77.216721" },
      });
    }),
  }),
    (global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => {
          // json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
          return Promise.resolve(data);
        },
      });
    }));
});

describe("Stimulation of search functionality", () => {
  it("should rednder the Body Component with search bar", async () => {
    //act : ensures all updates to components and state
    // are processed before making assertions
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    await waitFor(() => {
      const searchBtn = screen.getByTestId("search");
      expect(searchBtn).toBeInTheDocument();
    });
  });
});
