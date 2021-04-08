import CodemirrorWrapper from "./wrapper";
import {Outer} from "../../../../lib/components/Outer"

const CodeEditor: React.FC<{ code: string }> = ({ code }) => {
  return <Outer><CodemirrorWrapper initialValue={code} /> 
   </Outer>;
};

export default CodeEditor;
