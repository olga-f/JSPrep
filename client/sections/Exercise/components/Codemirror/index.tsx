import CodemirrorWrapper from "./wrapper";

const CodeEditor: React.FC<{ code: string }> = ({ code }) => {
  return (
  
      <CodemirrorWrapper initialValue={code} />

  );
};

export default CodeEditor;
