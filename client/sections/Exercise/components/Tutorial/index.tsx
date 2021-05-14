import { Cell, Grid } from 'baseui/layout-grid';
import { H1, Paragraph1 } from 'baseui/typography';

import { ExerciseProps } from '../../../../lib/types';

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
