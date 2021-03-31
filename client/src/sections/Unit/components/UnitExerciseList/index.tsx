import { useQuery } from "@apollo/client/react/hooks";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "node:querystring";
import { GET_EXERCISE_LIST } from "../../../../lib/graphql/queries";
import {
  exerciseListByUnitSlug as ExercisesData,
  exerciseListByUnitSlugVariables as Vars,
} from "../../../../lib/graphql/queries/Exercise/__generated__/exerciseListByUnitSlug";

import { Exercises } from "../Exercises";

export const UnitExerciseList = (): JSX.Element => {
  const router = useRouter();
 const { unit }: ParsedUrlQuery = router.query;

  const { loading, data, error } = useQuery<ExercisesData, Vars>(
    GET_EXERCISE_LIST,
    {
      variables: {
        slug: unit.toString(),
      },
    }
  );

  const renderUnitExerciseList = () => {
    if (loading) {
      //  return <HomeUnitListSkeleton />;
    }

    if (data) {
      return (
        <Exercises unit={unit.toString()} list={data.exerciseListByUnitSlug} />
      );
    }

    return null;
  };

  return <section>{renderUnitExerciseList()}</section>;
};
