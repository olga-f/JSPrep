import React from "react";
import { UnitExerciseList } from "../../UnitExerciseList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { emptyExercisesMock, exercisesMock } from "../../../../../mocks/unit";
describe("<HomeUnitList/> component", () => {
  it("renders <Units> if data provided", () => {
    render(<UnitExerciseList exercises={exercisesMock} />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).not.toBeEmptyDOMElement();
  });

  it("returns an empty <main> tag if data is an empty array", async () => {
    render(<UnitExerciseList exercises={emptyExercisesMock} />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toBeEmptyDOMElement();
  });
});
