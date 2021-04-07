import { ChallengeProps } from "../../../../lib/interfaces";
import CodeEditor from "../Codemirror";

export const Challenge = ({ data }: ChallengeProps): JSX.Element => {
  const code = data?.code ?? "";
  return (
    <div>
      <CodeEditor code={code} />
    </div>
  );
};
