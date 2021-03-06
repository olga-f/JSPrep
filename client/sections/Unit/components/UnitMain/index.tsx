import { Cell, Grid } from "baseui/layout-grid";
import { Exercises } from "../Exercises";
import { SideNav } from "../SideNav";
import type { ExercisesProps } from "../../../../lib/types";

export const UnitExerciseList = ({
  exercises,
}: ExercisesProps): JSX.Element => {
  const { data } = exercises;

  const renderUnitExerciseList = () => {
    if (data.exerciseListByUnitSlug?.length) {
      return <Exercises list={data.exerciseListByUnitSlug} />;
    }
    return null;
  };

  return (
    <Grid>
      <Cell span={[0, 2, 3]}>
        <SideNav />
      </Cell>
      <Cell span={[4, 6, 9]}>
        <main>{renderUnitExerciseList()}</main>
      </Cell>
    </Grid>
  );
};
