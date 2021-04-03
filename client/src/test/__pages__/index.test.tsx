import React from "react";
import HomePage from "../../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { unitListMocks } from "./mocks";

describe("Home page", () => {
  it("renders a home page", () => {
    render(
      <MockedProvider mocks={unitListMocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
  it("renders a list of units", async () => {
    render(
      <MockedProvider mocks={unitListMocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    const main = await screen.findByText("JavaScript basics");
    expect(main).toBeInTheDocument();
  });
});
