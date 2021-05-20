import { useStyletron } from 'baseui';
import { Cell, Grid } from 'baseui/layout-grid';
import { H1, Paragraph2 } from 'baseui/typography';
import Markdown from 'react-markdown';

import { ExerciseProps } from '../../../../lib/types';
import CodeEditor from './components/CodeEditor';

export const Challenge = ({ exercise }: ExerciseProps): JSX.Element => {
  const code = exercise.code?.toString() ?? "";
  const [css, theme] = useStyletron();
  return (
    <Grid>
      <Cell span={[4, 8, 5]}>
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
