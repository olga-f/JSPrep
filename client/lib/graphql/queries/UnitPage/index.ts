import { gql } from "apollo-boost";

export const EXERCISE_LIST = gql`
  query exerciseListByUnitSlug($slug: String!) {
    exerciseListByUnitSlug(slug: $slug) {
      id
      name
      position
      category
      slug
      unit {
        title
        description
      }
    }
  }
`;

export const UNIT_PATHS = gql`
  query unitPaths {
    unitList {
      id
      slug
    }
  }
`;



