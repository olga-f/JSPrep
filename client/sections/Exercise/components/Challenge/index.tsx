import CodeEditor from "./components/CodeEditor";
import Markdown from "react-markdown";
import { Cell, Grid } from "baseui/layout-grid";
import { H1, Paragraph2 } from "baseui/typography";
import { useStyletron } from "baseui";
import type { ExerciseProps } from "../../../../lib/types";

export const Challenge = ({ exercise }: ExerciseProps): JSX.Element => {
  const code = exercise.code?.toString() ?? "";
  const [css, theme] = useStyletron();
  return (
    <Grid>
      <Cell span={[4, 8, 6]}>
        <Cell span={[4, 8, 12]}>
          <H1>{exercise.name}</H1>
        </Cell>

        <Cell span={[4, 8, 12]}>
          <span className="markdown">
            <Markdown
              className={css({
                ...theme.typography.ParagraphMedium,
                marginBottom: theme.sizing.scale900,
              })}
            >
              {exercise.content ?? ""}
            </Markdown>
          </span>
        </Cell>
      </Cell>
      <Cell span={[4, 8, 6]}>
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
