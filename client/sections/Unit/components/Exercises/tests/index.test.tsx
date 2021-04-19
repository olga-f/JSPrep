import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Exercises } from "..";
import { exercisesMock } from "../../../../../mocks/unit";

describe("<Exercises /> component", () => {
  it("renders exercises with challenge link", async () => {
    render(<Exercises list={exercisesMock.data.exerciseListByUnitSlug} />);
    const links = await screen.findAllByRole("button", {
      name: /Solve/i,
    });
    expect(links[0]).toBeInTheDocument();
    expect(links[1]).toBeVisible();
    expect(links.length).toBe(2);
  });
  it("renders exercises with tutorial link", async () => {
    render(<Exercises list={exercisesMock.data.exerciseListByUnitSlug} />);
    const links = await screen.findAllByRole("button", {
      name: /Read/i,
    });
    expect(links[0]).toBeInTheDocument();
    expect(links[0]).toBeVisible();
    expect(links.length).toBe(1);
  });
});
