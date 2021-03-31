/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: exerciseBySlug
// ====================================================

export interface exerciseBySlug_exerciseBySlug {
  __typename: "ExerciseType";
  /**
   * _id
   */
  id: string | null;
  name: string;
  position: number;
  slug: string;
}

export interface exerciseBySlug {
  exerciseBySlug: exerciseBySlug_exerciseBySlug | null;
}

export interface exerciseBySlugVariables {
  slug: string;
}
