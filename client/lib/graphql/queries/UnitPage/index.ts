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
        slug
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

export const UNIT_NAV = gql`
  query unitNav {
    unitList {
      id
      title
      itemId: slug
    }
  }
`;
