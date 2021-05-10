import { ExerciseProps } from "../../../../lib/types";

import { H1 } from "baseui/typography";
import { Paragraph1 } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";

export const Tutorial = ({ exercise }: ExerciseProps): JSX.Element => {
  return (
    <Grid>
      <Cell span={[0, 1, 2]}></Cell>
      <Cell span={[4, 6, 8]}>
        <H1>{exercise.name}</H1>
        <Paragraph1>{exercise.content}</Paragraph1>
      </Cell>
      <Cell span={[0, 1, 2]}></Cell>
    </Grid>
  );
};
