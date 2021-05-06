import { ExerciseData } from "../lib/types";

export const exerciseMock: ExerciseData["exercise"] = {
  data: {
    exerciseBySlug: {
      __typename: "ExerciseType",
      id: "6079915fa227fd98210a2a22",
      name: "Functions",
      position: 1,
      category: "C",
      slug: "functions",
      description: "Test description",
      test: "",
      code: "",
      content: "",
      unit: {
        id: "4079915fa227fd98210a2a22",
        __typename: "UnitType",
        title: "JavaScript basics",
        slug: "javascript-basics",
      },
    },
  },
};
