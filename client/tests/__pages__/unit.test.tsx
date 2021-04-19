import UnitPage from "../../pages/[unit]";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { exercisesMock, unitNavMock } from "../../mocks/unit";
import { MockedProvider } from "@apollo/client/testing";
import { styletron } from "../../util/styletron";
import { Provider } from "styletron-react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { unit: "javascript-basics" },
    };
  },
}));
describe("Unit page", () => {
  it("renders a unit page", () => {
    render(
      <MockedProvider>
        <UnitPage exercises={exercisesMock} />
      </MockedProvider>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("displays exercises corresponding to the currently active side navigation link", async () => {
    render(
      <MockedProvider mocks={unitNavMock} addTypename={false}>
        <Provider value={styletron}>
          <UnitPage exercises={exercisesMock} />
        </Provider>
      </MockedProvider>
    );

    const activeLink = await screen.findByRole("link", {
      name: /JavaScript basics/i,
    });

    expect(activeLink).toBeInTheDocument();
    expect(activeLink.firstChild).toHaveClass("ek");
    expect(activeLink.firstChild).not.toHaveClass("ev");

    const inActiveLink1 = await screen.findByRole("link", {
      name: /Precourse/i,
    });
    expect(inActiveLink1.firstChild).not.toHaveClass("ek");
    expect(inActiveLink1.firstChild).toHaveClass("ev");

    const inActiveLink2 = await screen.findByRole("link", {
      name: /Asynchronous JavaScript/i,
    });
    expect(inActiveLink2.firstChild).not.toHaveClass("ek");
    expect(inActiveLink2.firstChild).toHaveClass("ev");
    const loading = screen.queryByText("Loading...");
    expect(loading).toBeNull();
  });

  it("renders list of exercises", async () => {
    render(
      <MockedProvider>
        <UnitPage exercises={exercisesMock} />
      </MockedProvider>
    );
    const first = await screen.findByText(/Functions/i);
    expect(first).toBeInTheDocument();
    const second = await screen.findByText(/Callbacks/i);
    expect(second).toBeInTheDocument();
    const third = await screen.findByText(/Recursion/i);
    expect(third).toBeInTheDocument();
  });
});
