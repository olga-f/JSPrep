import "@testing-library/jest-dom";

import React from "react";
import { Provider } from "styletron-react";

import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";

import { SideNav } from "../";
import {
  graphqlErrorMock,
  networkErrorMock,
  unitNavMock,
} from "../../../../../mocks/unit";
import { styletron } from "../../../../../util/styletron";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { unit: "javascript-basics" },
    };
  },
}));

describe("<SideNav/> component", () => {
  it("renders side navigation", async () => {
    render(
      <MockedProvider mocks={unitNavMock} addTypename={false}>
        <SideNav />
      </MockedProvider>
    );

    const nav = await screen.findByRole("navigation");
    expect(nav).toBeInTheDocument();
    const loader = document.querySelector("[testid='loader']");
    expect(loader).not.toBeInTheDocument();
  });
  it("renders an active link on the current path and inactive links on other paths", async () => {
    render(
      <MockedProvider mocks={unitNavMock} addTypename={false}>
        <Provider value={styletron}>
          <SideNav />
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

    const loader = document.querySelector("[testid='loader']");
    expect(loader).not.toBeInTheDocument();
  });

  it("returns empty side navigation if navigation data is an empty array", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <SideNav />
      </MockedProvider>
    );

    const nav = screen.queryByRole("navigation");
    expect(nav).not.toBeInTheDocument();
  });

  it("shows a loading indicator when loading navigation", async () => {
    render(
      <MockedProvider mocks={unitNavMock} addTypename={false}>
        <SideNav />
      </MockedProvider>
    );
    const loader = document.querySelector("[testid='loader']");
    expect(loader).toBeInTheDocument();
  });
  it("returns empty side navigation due to a GraphQL error", () => {
    render(
      <MockedProvider mocks={[graphqlErrorMock]} addTypename={false}>
        <SideNav />
      </MockedProvider>
    );

    const nav = screen.queryByRole("navigation");
    expect(nav).not.toBeInTheDocument();
  });
  it("returns empty side navigation due to a Network error", () => {
    render(
      <MockedProvider mocks={[networkErrorMock]} addTypename={false}>
        <SideNav />
      </MockedProvider>
    );

    const nav = screen.queryByRole("navigation");
    expect(nav).not.toBeInTheDocument();
  });
});
