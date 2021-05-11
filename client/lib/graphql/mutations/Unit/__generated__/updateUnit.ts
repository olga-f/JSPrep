/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UnitInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: updateUnit
// ====================================================

export interface updateUnit_updateUnit_unit {
  __typename: "UnitType";
  title: string;
  about: (string | null)[] | null;
  description: string | null;
  imageUrl: string | null;
  position: number;
}

export interface updateUnit_updateUnit {
  __typename: "UpdateUnitMutation";
  unit: updateUnit_updateUnit_unit | null;
}

export interface updateUnit {
  updateUnit: updateUnit_updateUnit | null;
}

export interface updateUnitVariables {
  input: UnitInput;
}
