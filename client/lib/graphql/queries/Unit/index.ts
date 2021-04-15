import { gql } from "apollo-boost";

export const UNIT_LIST = gql`
  query unitList {
    unitList {
      id
      title
      about
      imageUrl
      position
      slug
    }
  }
`;
export const UNIT_PATHS = gql`
  query unitPaths {
    unitList {
      slug
    }
  }
`;
