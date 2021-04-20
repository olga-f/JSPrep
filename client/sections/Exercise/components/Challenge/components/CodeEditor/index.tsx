import { Codemirror } from "./components/Codemirror";

const CodeEditor: React.FC<{ code: string }> = ({ code }) => {
  return <Codemirror initialValue={code} />;
};

export default CodeEditor;
