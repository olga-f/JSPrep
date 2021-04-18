import HomePage from "../../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { unitsMock } from "../../mocks/home";

describe("Home page", () => {
  it("renders a home page", () => {
    render(<HomePage units={unitsMock} />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders unit list data", async () => {
    render(<HomePage units={unitsMock} />);
    const data = await screen.findByRole("heading", {
      name: /JavaScript basics/i,
    });
    expect(data).toBeInTheDocument();
  });
});
