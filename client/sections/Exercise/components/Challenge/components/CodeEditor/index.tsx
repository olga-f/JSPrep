import { Skeleton } from "baseui/skeleton";
import dynamic from "next/dynamic";

const CodeEditor: React.FC<{ code: string }> = ({ code }) => {
  const Editor = dynamic(() => import("./components/Codemirror"), {
    loading: () => <Skeleton height="350px" width="100%" animation />,
    ssr: false,
  });

  return <Editor initialValue={code} />;
};

export default CodeEditor;
