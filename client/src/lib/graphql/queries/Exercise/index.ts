import { gql } from "apollo-boost";

export const EXERCISE = gql`
  query exercise($id: ID!) {
    exercise(id: $id) {
      id
      name
      description
      position
    }
  }
`;
