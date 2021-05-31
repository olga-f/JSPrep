import "@testing-library/jest-dom";

import React from "react";

import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";

import { UnitExerciseList } from "../";
import { emptyExercisesMock, exercisesMock } from "../../../../../mocks/unit";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { unit: "javascript-basics" },
    };
  },
}));
describe("<UnitExerciseList/> component", () => {
  it("renders <Exercises> if data provided", () => {
    render(
      <MockedProvider>
        <UnitExerciseList exercises={exercisesMock} />
      </MockedProvider>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).not.toBeEmptyDOMElement();
  });

  it("returns an empty <main> tag if data is an empty array", async () => {
    render(
      <MockedProvider>
        <UnitExerciseList exercises={emptyExercisesMock} />
      </MockedProvider>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toBeEmptyDOMElement();
  });
});
