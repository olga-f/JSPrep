/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: exercise
// ====================================================

export interface exercise_exercise {
  __typename: "ExerciseType";
  /**
   * _id
   */
  id: string | null;
  name: string | null;
  description: string | null;
  position: number | null;
}

export interface exercise {
  exercise: exercise_exercise | null;
}

export interface exerciseVariables {
  id: string;
}
