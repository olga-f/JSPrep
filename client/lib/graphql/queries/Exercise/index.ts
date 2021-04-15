import { gql } from "apollo-boost";

export const GET_EXERCISE = gql`
  query exerciseBySlug($slug: String!) {
    exerciseBySlug(slug: $slug) {
      id
      name
      position
      slug
    }
  }
`;

export const EXERCISE_PATHS = gql`
  query exerciseWithUnitPaths {
    exerciseList {
      slug
      unit {
        slug
      }
    }
  }
`;

export const EXERCISE_LIST = gql`
  query exerciseListByUnitSlug($slug: String!) {
    exerciseListByUnitSlug(slug: $slug) {
      name
      position
      category
      slug
    }
  }
`;

export const EXERCISE = gql`
  query exercise($slug: String!) {
    exerciseBySlug(slug: $slug) {
      name
      description
      content
      category
      code
      test
    }
  }
`;
