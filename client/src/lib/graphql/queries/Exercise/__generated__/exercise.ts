/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: exercise
// ====================================================

export interface exercise_exerciseBySlug {
  __typename: "ExerciseType";
  name: string;
  description: string | null;
  content: string | null;
  category: string;
  code: string | null;
  test: string | null;
}

export interface exercise {
  exerciseBySlug: exercise_exerciseBySlug | null;
}

export interface exerciseVariables {
  slug: string;
}
