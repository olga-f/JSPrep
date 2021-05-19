import {
    exerciseBySlug_exerciseBySlug
} from '../graphql/queries/ExercisePage/__generated__/exerciseBySlug';
import { unitList, unitList_unitList } from '../graphql/queries/HomePage/__generated__/unitList';
import {
    exerciseListByUnitSlug, exerciseListByUnitSlug_exerciseListByUnitSlug
} from '../graphql/queries/UnitPage/__generated__/exerciseListByUnitSlug';
import { unitNav_unitList } from '../graphql/queries/UnitPage/__generated__/unitNav';

export type UnitsProps = {
  units: {
    data: unitList;
  };
};

export type UnitListProps = {
  list: (unitList_unitList | null)[] | null;
};

export type ExercisesProps = {
  exercises: {
    data: exerciseListByUnitSlug;
  };
};

export type ExerciseListProps = {
  list: (exerciseListByUnitSlug_exerciseListByUnitSlug | null)[] | null;
};

export type ExerciseProps = {
  exercise: exerciseBySlug_exerciseBySlug;
};

export type ExerciseData = {
  exercise: { data: Exercise };
};

export type Exercise = {
  exerciseBySlug: exerciseBySlug_exerciseBySlug;
};
export type UnitNav = {
  unitList: unitNav_unitList[] | undefined;
};
