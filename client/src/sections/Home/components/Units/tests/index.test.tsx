import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Units } from "..";
import { resultMock, unitListMocks } from "../../../mocks";

describe("<Units /> component", () => {
  it("renders units with links", async () => {
    render(
      <MockedProvider mocks={unitListMocks} addTypename={false}>
        <Units list={resultMock.unitList} />
      </MockedProvider>
    );
    const link = await screen.findByRole("link", {
      name: /JavaScript basics/i,
    });
    expect(link).toBeInTheDocument();
  });
});
