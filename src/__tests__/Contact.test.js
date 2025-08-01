/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

describe("ContactUs Page Test Case", () => {
  test("should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside ContactUs component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");
    const submitBtn = screen.getByText("Send");
    expect(button).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it("should load Input inside ContactUs component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes in ContactUs component", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
