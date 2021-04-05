import { GraphQLError } from "graphql";
import { UNIT_LIST } from "../../../lib/graphql/queries";
import { unitList as UnitsData } from "../../../lib/graphql/queries/Unit/__generated__/unitList";

export const unitListMocks = [
  {
    request: {
      query: UNIT_LIST,
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
              "Booleans",
            ],
            imageUrl:
              "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
            position: 1,
            slug: "javascript-basics",
          },
          {
            id: "6061b9ef5ffc828e66366665",
            title: "JavaScript part 2",
            about: ["Data Types Overview 2"],
            imageUrl:
              "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
            position: 2,
            slug: "javascript-part-2",
          },
        ],
      },
    },
  },
];

export const networkErrorMock = {
  request: {
    query: UNIT_LIST,
  },
  error: new Error("An error occurred"),
};

export const graphqlErrorMock = {
  request: {
    query: UNIT_LIST,
  },
  errors: [new GraphQLError("Oops, Error!")],
};

export const emptyUnitListMock = {
  request: {
    query: UNIT_LIST,
  },
  result: {
    data: {
      unitList: [],
    },
  },
};

export const resultMock: UnitsData = {
  unitList: [
    {
      __typename: "UnitType",
      id: "6061b9b95ffc828e66366664",
      title: "JavaScript basics",
      about: [
        "Variables",
        "Data Types Overview",
        "Strings",
        "Numbers",
        "Booleans",
      ],
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
      position: 1,
      slug: "javascript-basics",
    },
    {
      __typename: "UnitType",
      id: "6061b9ef5ffc828e66366665",
      title: "JavaScript part 2",
      about: ["Data Types Overview 2"],
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
      position: 2,
      slug: "javascript-part-2",
    },
  ],
};
