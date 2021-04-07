import CodemirrorWrapper from "./wrapper";

const CodeEditor: React.FC<{ code: string  }> = ({code}) => {

  return (
    <div>
      <h1>Codemirror mood</h1>
      <CodemirrorWrapper initialValue={code} />
    </div>
  );
};

export default CodeEditor;
