import { ExerciseProps } from "../../../../lib/types";
import CodeEditor from "../Codemirror";
import { Grid, Cell } from "baseui/layout-grid";

export const Challenge = ({ exercise }: ExerciseProps): JSX.Element => {

  const code = exercise.code ?? "";
  return (
    <Grid>
      <Cell span={[4, 8, 5]}>
        <h1>{exercise.name}</h1>
        <p>{exercise.description}</p>
      </Cell>
      <Cell span={[4, 8, 7]}>
        <CodeEditor code={code} />
      </Cell>
    </Grid>
  );
};
