/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: exerciseBySlug
// ====================================================

export interface exerciseBySlug_exerciseBySlug_unit {
  __typename: "UnitType";
  /**
   * _id
   */
  id: string | null;
  slug: string;
  title: string;
}

export interface exerciseBySlug_exerciseBySlug {
  __typename: "ExerciseType";
  /**
   * _id
   */
  id: string | null;
  name: string;
  position: number;
  slug: string;
  description: string | null;
  content: string | null;
  category: string;
  code: string | null;
  test: string | null;
  unit: exerciseBySlug_exerciseBySlug_unit | null;
}

export interface exerciseBySlug {
  exerciseBySlug: exerciseBySlug_exerciseBySlug | null;
}

export interface exerciseBySlugVariables {
  slug: string;
}
