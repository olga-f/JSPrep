import { useQuery } from "@apollo/client/react/hooks";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "node:querystring";
import { GET_EXERCISE_LIST } from "../../../../lib/graphql/queries";
import {
  exerciseListByUnitSlug as ExercisesData,
  exerciseListByUnitSlugVariables as Vars,
} from "../../../../lib/graphql/queries/Exercise/__generated__/exerciseListByUnitSlug";

import { Exercises } from "../Exercises";

export const UnitExerciseList = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { unit }: ParsedUrlQuery = router.query;

  const { loading, data } = useQuery<ExercisesData, Vars>(
    GET_EXERCISE_LIST,
    {
      variables: {
        slug: unit as string,
      },
    }
  );

  const renderUnitExerciseList = () => {
    if (loading) {
      //  return <HomeUnitListSkeleton />;
    }

    if (data) {
      return (
        <Exercises unit={unit as string} list={data.exerciseListByUnitSlug} />
      );
    }

    return null;
  };

  return <section>{renderUnitExerciseList()}</section>;
};
