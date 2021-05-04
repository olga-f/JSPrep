import { ExerciseProps } from "../../../../lib/types";
import { Grid, Cell } from "baseui/layout-grid";
import CodeEditor from "./components/CodeEditor";
import { H1, Paragraph2 } from "baseui/typography";

export const Challenge = ({ exercise }: ExerciseProps): JSX.Element => {
  const code = exercise.code?.toString() ?? "";

  return (
    <Grid>
      <Cell span={[4, 8, 5]}>
        <H1 marginTop="-10px">{exercise.name}</H1>
        <Paragraph2>{exercise.description}</Paragraph2>
      </Cell>
      <Cell span={[4, 8, 7]}>
        <CodeEditor code={code} />
      </Cell>
    </Grid>
  );
};
