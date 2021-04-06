import CodemirrorWrapper from "./wrapper";

const CodeEditor: React.FC = () => {
  const initialValue = `const initial = 0 conlose.log("Welcome")`;

  return (
    <div>
      <h1>Codemirror mood</h1>
      <CodemirrorWrapper initialValue={initialValue.trim()} />
    </div>
  );
};

export default CodeEditor;
