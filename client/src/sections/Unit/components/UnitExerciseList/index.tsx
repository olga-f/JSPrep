import { useQuery } from "@apollo/client/react/hooks";
import { useRouter } from "next/router";
import { EXERCISE_LIST } from "../../../../lib/graphql/queries";

import {
  exerciseList as ExercisesData,
  exerciseListVariables,
} from "../../../../lib/graphql/queries/ExerciseList/__generated__/exerciseList";

import { Exercises } from "../Exercises";

export const UnitExerciseList = (): JSX.Element => {
  const router = useRouter();
  const { unit } = router.query;

  const { loading, data, error } = useQuery<
    ExercisesData,
    exerciseListVariables
  >(EXERCISE_LIST, {
    variables: {
      id: unit.toString(),
    },
  });

  const renderUnitExerciseList = () => {
    if (loading) {
      //  return <HomeUnitListSkeleton />;
    }

    if (data) {
      return <Exercises list={data.exerciseList} />;
    }

    return null;
  };

  return <section>{renderUnitExerciseList()}</section>;
};
