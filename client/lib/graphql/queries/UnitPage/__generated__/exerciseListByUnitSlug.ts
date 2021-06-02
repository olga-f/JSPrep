/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: exerciseListByUnitSlug
// ====================================================

export interface exerciseListByUnitSlug_exerciseListByUnitSlug_unit {
  __typename: "UnitType";
  title: string;
  description: string | null;
  slug: string;
}

export interface exerciseListByUnitSlug_exerciseListByUnitSlug {
  __typename: "ExerciseType";
  /**
   * _id
   */
  id: string | null;
  name: string;
  position: number;
  category: string;
  slug: string;
  unit: exerciseListByUnitSlug_exerciseListByUnitSlug_unit | null;
}

export interface exerciseListByUnitSlug {
  exerciseListByUnitSlug: (exerciseListByUnitSlug_exerciseListByUnitSlug | null)[] | null;
}

export interface exerciseListByUnitSlugVariables {
  slug: string;
}
