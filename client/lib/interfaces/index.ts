import { exercise } from "../graphql/queries/Exercise/__generated__/exercise";
import {
  exerciseListByUnitSlug,
  exerciseListByUnitSlugVariables,
} from "../graphql/queries/Exercise/__generated__/exerciseListByUnitSlug";
import { unitList } from "../graphql/queries/Unit/__generated__/unitList";

export interface UnitProps {
  list: unitList["unitList"];
}
export interface ExerciseProps {
  list: exerciseListByUnitSlug["exerciseListByUnitSlug"];
  unit: exerciseListByUnitSlugVariables["slug"];
}

export interface ChallengeProps {
  data: exercise["exerciseBySlug"];
}

interface Tutorial {
  __typename: "ExerciseType";
  name: string;
  description: string | null;
  content: string | null;
}
export interface TutorialProps {
  data: Tutorial | null;
}
