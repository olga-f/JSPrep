import { gql } from "apollo-boost";

export const CREATE_UNIT = gql`
  mutation createUnit($input: UnitInput!) {
    createUnit(unitData: $input) {
      unit {
        title
        about
        description
        imageUrl
      }
    }
  }
`;

export const EDIT_UNIT = gql`
  mutation updateUnit($input: UnitInput!) {
    updateUnit(unitData: $input) {
      unit {
        title
        about
        description
        imageUrl
        position
      }
    }
  }
`;

export const DELETE_UNIT = gql`
  mutation deleteUnit($id: ID!) {
    deleteUnit(id: $id) {
      success
    }
  }
`;
