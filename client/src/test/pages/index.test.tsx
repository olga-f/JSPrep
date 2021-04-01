import React from "react";
import HomePage from "../../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider} from "@apollo/client/testing";
import { UNIT_LIST } from "../../lib/graphql/queries";

const mocks = [
    {
      request: {
        query: UNIT_LIST
      },
      result: {
        data: {
          unitList: [
            {
              id: "6061b9b95ffc828e66366664",
              title: "JavaScript basics",
              about: [
                "Variables",
                "Data Types Overview",
                "Strings",
                "Numbers",
                "Booleans"
              ],
              imageUrl: "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
              position: 1,
              slug: "javascript-basics"
            },
            {
              id: "6061b9ef5ffc828e66366665",
              title: "JavaScript basics part 2",
              about: [
                "Data Types Overview 2"
              ],
              imageUrl: "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
              position: 2,
              slug: "javascript-basics-part-2"
            }
          ]
        }
      },
    },
  ];
describe("Home page", () => {
  it("renders without error", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    const main = screen.getByRole("link");
    expect(main).toBeInTheDocument();
  });
});
