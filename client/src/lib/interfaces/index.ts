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
