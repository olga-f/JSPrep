import { ExerciseProps } from "../../../../lib/types";
import { Grid, Cell } from "baseui/layout-grid";
import Loadable from "react-loadable";
import Loading from "./components/EditorSkeleton";

export const Challenge = ({ exercise }: ExerciseProps): JSX.Element => {
  const code = exercise.code?.toString() ?? "";
  const LoadableCodeEditor = Loadable({
    loader: () => import("./components/CodeEditor"),
    loading: Loading,
  });
  return (
    <Grid>
      <Cell span={[4, 8, 5]}>
        <h1>{exercise.name}</h1>
        <p>{exercise.description}</p>
      </Cell>
      <Cell span={[4, 8, 7]}>
        <LoadableCodeEditor code={code} />
      </Cell>
    </Grid>
  );
};
