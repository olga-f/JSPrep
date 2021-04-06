import { useQuery } from "@apollo/client/react/hooks";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "node:querystring";
import React from "react";
import { EXERCISE } from "../../../../lib/graphql/queries";
import {
  exercise as Exercise,
  exerciseVariables as Vars,
} from "../../../../lib/graphql/queries/Exercise/__generated__/exercise";
import CodeEditor from "../Codemirror";

export const ExerciseMain = (): JSX.Element => {
  // const router: NextRouter = useRouter();
  // const { exercise }: ParsedUrlQuery = router.query;

  // const { loading, data } = useQuery<Exercise, Vars>(EXERCISE, {
  //   variables: {
  //     slug: exercise as string,
  //   },
  // });

  const renderExerciseMain = () => {
  //  if (loading) {
      //  return <HomeUnitListSkeleton />;
 //   }

  //  if (data) {
   return  <CodeEditor />;
  //  }

   // return null;
  };

  return <section>{renderExerciseMain()}</section>;
};
