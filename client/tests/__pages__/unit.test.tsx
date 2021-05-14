import '@testing-library/jest-dom';

import { Provider } from 'styletron-react';

import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';

import { exercisesMock, unitNavMock } from '../../mocks/unit';
import UnitPage from '../../pages/[unit]';
import { styletron } from '../../util/styletron';

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
    expect(activeLink.firstChild).toHaveStyle(
      "background-color: rgb(0, 0, 0);"
    );

    const inactiveLink1 = await screen.findByRole("link", {
      name: /Precourse/i,
    });
    expect(inactiveLink1.firstChild).toHaveStyle(
      "background-color: transparent;"
    );

    const inactiveLink2 = await screen.findByRole("link", {
      name: /Asynchronous JavaScript/i,
    });
    expect(inactiveLink2.firstChild).toHaveStyle(
      "background-color: transparent;"
    );
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
