import { ExerciseProps } from "../../../../lib/types";
import { Grid, Cell } from "baseui/layout-grid";
import CodeEditor from "./components/CodeEditor";
import { H1, Paragraph2 } from "baseui/typography";

export const Challenge = ({ exercise }: ExerciseProps): JSX.Element => {
  const code = exercise.code?.toString() ?? "";

  return (
    <Grid>
      <Cell span={[4, 8, 5]}>
        <Cell span={[4, 8, 12]}>
          <H1>{exercise.name}</H1>
        </Cell>

        <Cell span={[4, 8, 12]}>
          <Paragraph2>{exercise.content}</Paragraph2>
        </Cell>
      </Cell>
      <Cell span={[4, 8, 7]}>
        <Cell span={[4, 8, 12]}>
          <br />
          <Paragraph2>{exercise.description}</Paragraph2>
          <br />
        </Cell>

        <CodeEditor code={code} />
      </Cell>
    </Grid>
  );
};
