import { unitList } from "../../lib/graphql/queries/UnitList/__generated__/unitList";
import { exerciseList } from "../../lib/graphql/queries/ExerciseList/__generated__/exerciseList";

export interface UnitProps {
  list: unitList["unitList"];
}
// export interface MatchParams {
//   title: string;
// }
export interface ExerciseProps {
  list: exerciseList["exerciseList"];
}
