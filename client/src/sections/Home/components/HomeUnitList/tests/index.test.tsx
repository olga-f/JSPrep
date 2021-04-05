import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { HomeUnitList } from "..";
import {
  emptyUnitListMock,
  graphqlErrorMock,
  networkErrorMock,
  unitListMocks,
} from "../../../mocks";

describe("<HomeUnitList /> component", () => {
  it("shows a loading message", () => {
    render(
      <MockedProvider mocks={unitListMocks} addTypename={false}>
        <HomeUnitList />
      </MockedProvider>
    );
    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
  });

  it("shows an error UI due to a Network error", async () => {
    render(
      <MockedProvider mocks={[networkErrorMock]} addTypename={false}>
        <HomeUnitList />
      </MockedProvider>
    );
    const error = await screen.findByText("Error!");
    expect(error).toBeInTheDocument();
  });

  it("shows an error UI due to a GraphQL error", async () => {
    render(
      <MockedProvider mocks={[graphqlErrorMock]} addTypename={false}>
        <HomeUnitList />
      </MockedProvider>
    );
    const error = await screen.findByText("Error!");
    expect(error).toBeInTheDocument();
  });
  it("renders unit list data", async () => {
    render(
      <MockedProvider mocks={unitListMocks} addTypename={false}>
        <HomeUnitList />
      </MockedProvider>
    );
    const data = await screen.findByRole("list");
    expect(data).toBeInTheDocument();
    const error = screen.queryByText("Error!");
    expect(error).not.toBeInTheDocument();
    const loading = screen.queryByText("Loading...");
    expect(loading).not.toBeInTheDocument();
  });
  it("has no data and no errors", async () => {
    render(
      <MockedProvider mocks={[emptyUnitListMock]} addTypename={false}>
        <HomeUnitList />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.queryByRole("list")).not.toBeInTheDocument()
    );
    const error = screen.queryByText("Error!");
    expect(error).not.toBeInTheDocument();
    const loading = screen.queryByText("Loading...");
    expect(loading).not.toBeInTheDocument();
  });
});
