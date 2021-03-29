import { gql } from "apollo-boost";

export const EXERCISE_LIST = gql`
  query exerciseList($id: ID!) {
    exerciseList(unitId: $id) {
      id
      unit {
        id
      }
      name
      category
      position
    }
  }
`;
