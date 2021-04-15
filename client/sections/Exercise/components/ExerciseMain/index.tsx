import { useQuery } from "@apollo/client/react/hooks";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "node:querystring";
import React from "react";
import { EXERCISE } from "../../../../lib/graphql/queries";
import {
  exercise as Exercise,
  exerciseVariables as Vars,
} from "../../../../lib/graphql/queries/Exercise/__generated__/exercise";
import { Challenge } from "../Challenge";
import { Tutorial } from "../Tutorial";
//import CodeEditor from "../Codemirror";

export const ExerciseMain = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { exercise }: ParsedUrlQuery = router.query;
  const { loading, data } = useQuery<Exercise, Vars>(EXERCISE, {
    variables: {
      slug: exercise as string,
    },
  });

  const renderExerciseMain = () => {
    if (loading) {
      //  return <HomeUnitListSkeleton />;
    }
    if (data && data.exerciseBySlug) {
      return setCategory(data);
    }
    return null;
  };
  return <section>{renderExerciseMain()}</section>;
};

function setCategory(data: Exercise) {
  switch (data?.exerciseBySlug?.category) {
    case "C":
      return <Challenge data={data.exerciseBySlug} />;
    case "T":
      return <Tutorial data={data.exerciseBySlug} />;

    default:
      return <Tutorial data={data.exerciseBySlug} />;
  }
}
