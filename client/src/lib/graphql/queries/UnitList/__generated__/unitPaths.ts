/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: unitPaths
// ====================================================

export interface unitPaths_unitList {
  __typename: "UnitType";
  /**
   * _id
   */
  id: string | null;
  title: string | null;
}

export interface unitPaths {
  unitList: (unitPaths_unitList | null)[] | null;
}
