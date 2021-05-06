import { gql } from "apollo-boost";

export const EXERCISE_PATHS = gql`
  query exerciseWithUnitPaths {
    exerciseList {
      id
      slug
      unit {
        slug
      }
    }
  }
`;

export const GET_EXERCISE = gql`
  query exerciseBySlug($slug: String!) {
    exerciseBySlug(slug: $slug) {
      id
      name
      position
      slug
      description
      content
      category
      code
      test
      unit {
        id
        slug
        title
      }
    }
  }
`;
