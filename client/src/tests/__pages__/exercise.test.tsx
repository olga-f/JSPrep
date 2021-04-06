import React from "react";
import ExercisePage from "../../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
describe("Exercise page", () => {
    it("renders a unit page", () => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
          <ExercisePage />
        </MockedProvider>
      );
      const main = screen.getByRole("main");
      expect(main).toBeInTheDocument();
    });
  });