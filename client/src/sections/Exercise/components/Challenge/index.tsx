import { ChallengeProps } from "../../../../lib/interfaces";
import CodeEditor from "../Codemirror";

import {Grid, Cell} from 'baseui/layout-grid';

export const Challenge = ({ data }: ChallengeProps): JSX.Element => {
  const code = data?.code ?? "";
  return (
    <Grid>
      <Cell span={[4, 8, 5]}><h1>Hello there, you are welcome</h1></Cell>
      <Cell span={[4, 8, 7]}> <CodeEditor code={code} /></Cell>
    </Grid>
  );
};
