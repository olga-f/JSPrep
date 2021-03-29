/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: exerciseList
// ====================================================

export interface exerciseList_exerciseList_unit {
  __typename: "UnitType";
  /**
   * _id
   */
  id: string | null;
}

export interface exerciseList_exerciseList {
  __typename: "ExerciseType";
  /**
   * _id
   */
  id: string | null;
  unit: exerciseList_exerciseList_unit | null;
  name: string | null;
  category: string | null;
  position: number | null;
}

export interface exerciseList {
  exerciseList: (exerciseList_exerciseList | null)[] | null;
}

export interface exerciseListVariables {
  id: string;
}
