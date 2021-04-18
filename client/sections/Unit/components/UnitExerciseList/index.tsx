import { Exercises } from "../Exercises";
import { ExercisesProps } from "../../../../lib/types";


export const UnitExerciseList = ({ exercises }:ExercisesProps): JSX.Element => {
  const { data } = exercises;

  const renderUnitExerciseList = () => {
    if (data.exerciseListByUnitSlug?.length) {
      return <Exercises list={data.exerciseListByUnitSlug} />;
    }
    return null;
  };

  return <main>{renderUnitExerciseList()}</main>;
};
