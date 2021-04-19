import React from "react";
import { HomeUnitList } from "../../HomeUnitList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { emptyUnitsMock, unitsMock } from "../../../../../mocks/home";
describe("<HomeUnitList/> component", () => {
  it("renders <Units> if data provided", () => {
    render(<HomeUnitList units={unitsMock} />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).not.toBeEmptyDOMElement();
  });

  it("returns an empty <main> tag if data is an empty array", async () => {
    render(<HomeUnitList units={emptyUnitsMock} />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toBeEmptyDOMElement();
  });
});
