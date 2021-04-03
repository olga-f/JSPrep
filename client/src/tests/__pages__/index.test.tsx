import React from "react";
import HomePage from "../../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

describe("Home page", () => {
  it("renders a home page", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
