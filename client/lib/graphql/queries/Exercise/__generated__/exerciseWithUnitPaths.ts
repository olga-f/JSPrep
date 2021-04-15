/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: exerciseWithUnitPaths
// ====================================================

export interface exerciseWithUnitPaths_exerciseList_unit {
  __typename: "UnitType";
  slug: string;
}

export interface exerciseWithUnitPaths_exerciseList {
  __typename: "ExerciseType";
  slug: string;
  unit: exerciseWithUnitPaths_exerciseList_unit | null;
}

export interface exerciseWithUnitPaths {
  exerciseList: (exerciseWithUnitPaths_exerciseList | null)[] | null;
}
