/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: exerciseListByUnitSlug
// ====================================================

export interface exerciseListByUnitSlug_exerciseListByUnitSlug {
  __typename: "ExerciseType";
  name: string;
  position: number;
  category: string;
  slug: string;
}

export interface exerciseListByUnitSlug {
  exerciseListByUnitSlug:
    | (exerciseListByUnitSlug_exerciseListByUnitSlug | null)[]
    | null;
}

export interface exerciseListByUnitSlugVariables {
  slug: string;
}
