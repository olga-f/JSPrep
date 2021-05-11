/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ExerciseInput, ExerciseCategory } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: createExercise
// ====================================================

export interface createExercise_createExercise_exercise_unit {
  __typename: "UnitType";
  /**
   * _id
   */
  id: string | null;
}

export interface createExercise_createExercise_exercise {
  __typename: "ExerciseType";
  name: string;
  description: string | null;
  content: string | null;
  code: string | null;
  test: string | null;
  unit: createExercise_createExercise_exercise_unit | null;
}

export interface createExercise_createExercise {
  __typename: "CreateExerciseMutation";
  exercise: createExercise_createExercise_exercise | null;
}

export interface createExercise {
  createExercise: createExercise_createExercise | null;
}

export interface createExerciseVariables {
  data: ExerciseInput;
  enum?: ExerciseCategory | null;
}
