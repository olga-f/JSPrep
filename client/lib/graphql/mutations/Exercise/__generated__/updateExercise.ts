/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ExerciseInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: updateExercise
// ====================================================

export interface updateExercise_updateExercise_exercise_unit {
  __typename: "UnitType";
  /**
   * _id
   */
  id: string | null;
}

export interface updateExercise_updateExercise_exercise {
  __typename: "ExerciseType";
  name: string;
  description: string | null;
  content: string | null;
  code: string | null;
  test: string | null;
  position: number;
  category: string;
  unit: updateExercise_updateExercise_exercise_unit | null;
}

export interface updateExercise_updateExercise {
  __typename: "UpdateExerciseMutation";
  exercise: updateExercise_updateExercise_exercise | null;
}

export interface updateExercise {
  updateExercise: updateExercise_updateExercise | null;
}

export interface updateExerciseVariables {
  data: ExerciseInput;
}
