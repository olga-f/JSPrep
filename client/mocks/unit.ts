import { GraphQLError } from "graphql/error";
import { UNIT_NAV } from "../lib/graphql/queries";
import { exerciseListByUnitSlug } from "../lib/graphql/queries/UnitPage/__generated__/exerciseListByUnitSlug";

const exercises: exerciseListByUnitSlug = {
  exerciseListByUnitSlug: [
    {
      __typename: "ExerciseType",
      id: "6079915fa227fd98210a2a22",
      name: "Functions",
      position: 1,
      category: "C",
      slug: "functions",
      unit: {
        __typename: "UnitType",
        title: "JavaScript basics",
        description: "description JavaScript basics",
        slug: "javascript-basics",
      },
    },
    {
      __typename: "ExerciseType",
      id: "5079915fa227fd98210a2a22",
      name: "Callbacks",
      position: 2,
      category: "T",
      slug: "callbacks",
      unit: {
        __typename: "UnitType",
        title: "JavaScript basics",
        description: "description JavaScript basics",
        slug: "javascript-basics",
      },
    },
    {
      __typename: "ExerciseType",
      id: "5479915fa227fd98210a2a22",
      name: "Recursion",
      position: 3,
      category: "C",
      slug: "recursion",
      unit: {
        __typename: "UnitType",
        title: "JavaScript basics",
        description: "description JavaScript basics",
        slug: "javascript-basics",
      },
    },
  ],
};

export const exercisesMock = {
  data: exercises,
};

const emptyList = {
  exerciseListByUnitSlug: [],
};

export const emptyExercisesMock = {
  data: emptyList,
};

export const unitNavMock = [
  {
    request: {
      query: UNIT_NAV,
    },
    result: {
      data: {
        unitList: [
          { title: "Precourse", itemId: "precourse" },
          { title: "JavaScript basics", itemId: "javascript-basics" },
          {
            title: "Asynchronous JavaScript",
            itemId: "asynchronous-javaScript",
          },
        ],
      },
    },
  },
];


export const networkErrorMock = {
  request: {
    query: UNIT_NAV,
  },
  error: new Error("An error occurred"),
};

export const graphqlErrorMock = {
  request: {
    query: UNIT_NAV,
  },
  errors: [new GraphQLError("Oops, Error!")],
};
