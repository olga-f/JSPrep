import ExercisePage from "../../pages/[unit]/[exercise]";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { exerciseMock } from "../../mocks/exercise";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      asPath: "/javascript-basics/functions",
    };
  },
}));
describe("Exercise page", () => {
  it("renders an exercise", () => {
    render(<ExercisePage exercise={exerciseMock} />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("renders exercise data", async () => {
    render(<ExercisePage exercise={exerciseMock} />);
    const name = await screen.findByText(/Functions/i);
    expect(name).toBeInTheDocument();
    const description = await screen.findByText(/Test description/i);
    expect(description).toBeInTheDocument();
  });
});
