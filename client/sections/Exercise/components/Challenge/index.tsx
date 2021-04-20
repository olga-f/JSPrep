import { ExerciseProps } from "../../../../lib/types";
import { Grid, Cell } from "baseui/layout-grid";
import CodeEditor from "./components/CodeEditor";

export const Challenge = ({ exercise }: ExerciseProps): JSX.Element => {
  const code = exercise.code?.toString() ?? "";
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
