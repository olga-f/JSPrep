import React from "react";
import UnitPage from "../../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { exerciseListMocks } from "./mocks";

describe("Unit page", () => {
  it("renders a unit page", () => {
    render(
      <MockedProvider mocks={exerciseListMocks} addTypename={false}>
        <UnitPage />
      </MockedProvider>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
