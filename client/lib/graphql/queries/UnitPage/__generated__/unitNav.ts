/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: unitNav
// ====================================================

export interface unitNav_unitList {
  __typename: "UnitType";
  /**
   * _id
   */
  id: string | null;
  title: string;
  itemId: string;
}

export interface unitNav {
  unitList: (unitNav_unitList | null)[] | null;
}
