import UnitPage from "../../pages/[unit]";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { exercisesMock } from "../../mocks/unit";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      asPath: "/javascript-basics",
    };
  },
}));
describe("Unit page", () => {
  it("renders a unit page", () => {
    render(<UnitPage exercises={exercisesMock} />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders list of exercises", async () => {
    render(<UnitPage exercises={exercisesMock} />);
    const first = await screen.findByText(/Functions/i);
    expect(first).toBeInTheDocument();
    const second = await screen.findByText(/Callbacks/i);
    expect(second).toBeInTheDocument();
    const third = await screen.findByText(/Recursion/i);
    expect(third).toBeInTheDocument();
  });
});
