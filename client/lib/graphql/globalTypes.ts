/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum ExerciseCategory {
  CHALLENGE = "CHALLENGE",
  TUTORIAL = "TUTORIAL",
  VIDEO = "VIDEO",
}

export interface ExerciseInput {
  id?: string | null;
  unit?: string | null;
  name?: string | null;
  description?: string | null;
  content?: string | null;
  category?: string | null;
  code?: string | null;
  test?: string | null;
  position?: number | null;
}

export interface UnitInput {
  id?: string | null;
  title?: string | null;
  about?: (string | null)[] | null;
  description?: string | null;
  imageUrl?: string | null;
  position?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
