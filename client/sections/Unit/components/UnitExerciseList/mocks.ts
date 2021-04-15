import { EXERCISE_LIST } from "../../../../lib/graphql/queries";

export const exerciseListMocks = [
  {
    request: {
      query: EXERCISE_LIST,
      variables: {
        unit: "javascript-basics",
      },
    },
    result: {
      data: {
        exerciseListByUnitSlug: [
          {
            position: 1,
            slug: "test-exercise",
            name: "Test Exercise",
            category: "C",
          },
          {
            position: 2,
            slug: "test-exercise-2",
            name: "Test Exercise 2",
            category: "C",
          },
          {
            position: 3,
            slug: "test-exercise-3",
            name: "Test Exercise 3",
            category: "V",
          },
          {
            position: 4,
            slug: "exercise-challange",
            name: "Exercise Challange",
            category: "C",
          },
          {
            position: 5,
            slug: "exercise-challange-2",
            name: "Exercise Challange 2",
            category: "C",
          },
          {
            position: 6,
            slug: "exercise-challange-3",
            name: "Exercise Challange 3",
            category: "C",
          },
        ],
      },
    },
  },
];
