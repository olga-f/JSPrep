import { gql } from "apollo-boost";

export const CREATE_EXERCISE = gql`
  mutation createExercise($data: ExerciseInput!, $enum: ExerciseCategory) {
    createExercise(exerciseData: $data, categoryEnum: $enum) {
      exercise {
        name
        description
        content
        code
        test
        unit {
          id
        }
      }
    }
  }
`;

export const EDIT_EXERCISE = gql`
  mutation updateExercise($data: ExerciseInput!) {
    updateExercise(exerciseData: $data) {
      exercise {
        name
        description
        content
        code
        test
        position
        category
        unit {
          id
        }
      }
    }
  }
`;

export const DELETE_EXERCISE = gql`
  mutation deleteExercise($id: ID!) {
    deleteExercise(id: $id) {
      success
    }
  }
`;
