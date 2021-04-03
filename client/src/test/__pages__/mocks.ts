import { EXERCISE_LIST, UNIT_LIST } from "../../lib/graphql/queries";

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
            title: "JavaScript basics part 2",
            about: ["Data Types Overview 2"],
            imageUrl:
              "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
            position: 2,
            slug: "javascript-basics-part-2",
          },
        ],
      },
    },
  },
];

export const exerciseListMocks = [
  {
    request: {
      query: EXERCISE_LIST,
      variables: {
        slug: "javascript-basics",
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
