/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: unitList
// ====================================================

export interface unitList_unitList {
  __typename: "UnitType";
  /**
   * _id
   */
  id: string | null;
  title: string | null;
  about: (string | null)[] | null;
  imageUrl: string | null;
  position: number | null;
}

export interface unitList {
  unitList: (unitList_unitList | null)[] | null;
}
