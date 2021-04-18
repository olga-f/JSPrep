import {
  unitList,
  unitList_unitList,
} from "../graphql/queries/HomePage/__generated__/unitList";
import {
  exerciseListByUnitSlug,
  exerciseListByUnitSlug_exerciseListByUnitSlug,
} from "../graphql/queries/UnitPage/__generated__/exerciseListByUnitSlug";

export type UnitsProps = {
  units: {
    data: unitList;
  };
};

export type UnitListProps = {
  list: (unitList_unitList | null)[] | null;
};

export type ExercisesProps = {
  exercises: {
    data: exerciseListByUnitSlug;
  };
};

export type ExerciseListProps = {
  list: (exerciseListByUnitSlug_exerciseListByUnitSlug | null)[] | null;
};

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
