import {
  unitList,
  unitList_unitList,
} from "../graphql/queries/HomePage/__generated__/unitList";

export type UnitsProps = {
  units: {
    data: unitList;
  };
};

export type ListProps = {
  list: (unitList_unitList | null)[] | null;
};

// import { exercise } from "../graphql/queries/Exercise/__generated__/exercise";
// import {
//   exerciseListByUnitSlug,
//   exerciseListByUnitSlugVariables,
// } from "../graphql/queries/ExercisePage/__generated__/exerciseListByUnitSlug";

// export interface ExercisesProps {
//   list: exerciseListByUnitSlug["exerciseListByUnitSlug"];
//   unit: exerciseListByUnitSlugVariables["slug"];
// }

// export interface ChallengeProps {
//   data: exercise["exerciseBySlug"];
// }

// interface Tutorial {
//   __typename: "ExerciseType";
//   name: string;
//   description: string | null;
//   content: string | null;
// }
// export interface TutorialProps {
//   data: Tutorial | null;
// }
