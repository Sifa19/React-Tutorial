/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card, CardWithPromotedLabel } from "../components/Card";
import data from "./mocks/Card.json";

it("should render resturant card with the data", () => {
  render(<Card data={data.card} />);
  const name = screen.getByText("Chaayos Chai+Snacks=Relax");
  expect(name).toBeInTheDocument();
});

it("should render card with promoted label", () => {
  const PromotedCard = CardWithPromotedLabel(Card);
  render(<PromotedCard data={data.cardWithPromotedLabel} />);
  screen.debug();
  const name = screen.getByText("Poco A Poco");
  expect(name).toBeInTheDocument();
});
