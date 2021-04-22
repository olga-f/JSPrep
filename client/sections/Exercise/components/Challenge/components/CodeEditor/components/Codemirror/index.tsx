import { useRef, useEffect, useState } from "react";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState, Compartment } from "@codemirror/state";
//import beautify_js from "js-beautify";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import { Paragraph3 } from "baseui/typography";
import Interpreter from "js-interpreter";
import * as Babel from "@babel/standalone";

export const Codemirror: React.FC<{ initialValue: string }> = ({
  initialValue,
}) => {
  const [state, setState] = useState({
    editorValue: "",
    outputValue: "",
    errorValue: "",
  });

  const editor = useRef<EditorView>();

  // Event listener on editor updates
  const onUpdate = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;
      const value = doc.toString();
      if (value !== state.editorValue) {
        setState({ ...state, editorValue: value });
      }
    });

  const initEditorView = async () => {
    const js = (await import("@codemirror/lang-javascript")).javascript;
    const setup = (await import("@codemirror/basic-setup")).basicSetup;
    const el = document.getElementById("editor");
    const language = new Compartment();
    editor.current = new EditorView({
      state: EditorState.create({
        doc: initialValue,
        extensions: [setup, language.of(js()), onUpdate()],
      }),

      parent: el as Element,
    });
  };

  // Initilize view
  useEffect(() => {
    initEditorView();
  }, []);

  const runCode = (code: string) => {
    const output = JSrunner(code);
    if (output) {
      output.value === undefined
        ? setState({ ...state, outputValue: output.toString() })
        : setState({ ...state, outputValue: output.value });
    } else {
      setState({
        ...state,
        outputValue: "Your code could not run on this browser.",
      });
    }
  };

  // Component for output code from editor
  const OutputText = () => (
    <pre>
      <code>{state.outputValue}</code>
    </pre>
  );

  const [css, theme] = useStyletron();

  return (
    <Paragraph3
      className={css({
        position: "relative",
      })}
    >
      <div id="editor"></div>
      <OutputText />
      <span
        className={css({
          position: "absolute",
          bottom: theme.sizing.scale300,
          right: theme.sizing.scale100,
        })}
      >
        <Button>Reset Code</Button>
        <span className={css({ marginLeft: theme.sizing.scale300 })} />
        <Button onClick={() => runCode(state.editorValue)}>Run Code</Button>
      </span>
    </Paragraph3>
  );
};
function JSrunner(code: string) {
  try {
    const tcode = Babel.transform(code, { presets: ["env"] }).code;
    const jsInterpreter = new Interpreter(tcode);
    jsInterpreter.run();
    return jsInterpreter;
  } catch (error) {
    return error;
  }
}
