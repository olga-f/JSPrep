/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UnitInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: createUnit
// ====================================================

export interface createUnit_createUnit_unit {
  __typename: "UnitType";
  title: string;
  about: (string | null)[] | null;
  description: string | null;
  imageUrl: string | null;
}

export interface createUnit_createUnit {
  __typename: "CreateUnitMutation";
  unit: createUnit_createUnit_unit | null;
}

export interface createUnit {
  createUnit: createUnit_createUnit | null;
}

export interface createUnitVariables {
  input: UnitInput;
}
