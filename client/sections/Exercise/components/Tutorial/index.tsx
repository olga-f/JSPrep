import Markdown from "react-markdown";
import { Cell, Grid } from "baseui/layout-grid";
import { H1 } from "baseui/typography";
import { useStyletron } from "baseui";
import type { ExerciseProps } from "../../../../lib/types";

export const Tutorial = ({ exercise }: ExerciseProps): JSX.Element => {
  const [css, theme] = useStyletron();
  return (
    <Grid>
      <Cell span={[0, 1, 2]}></Cell>
      <Cell span={[4, 6, 8]}>
        <H1>{exercise.name}</H1>
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
      <Cell span={[0, 1, 2]}></Cell>
    </Grid>
  );
};
