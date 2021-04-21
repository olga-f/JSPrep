import { useRef, useEffect, useState } from "react";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState, Compartment } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
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

  const initEditorView = () => {
    const el = document.getElementById("editor");
    const language = new Compartment();
    editor.current = new EditorView({
      state: EditorState.create({
        doc: initialValue,
        extensions: [
          basicSetup,
          language.of(javascript()),
          oneDark,
          onUpdate(),
        ],
      }),

      parent: el as Element,
    });
  };

  // Initilize view
  useEffect(initEditorView, []);

  const runCode = () => {
    const tcode = Babel.transform(state.editorValue, { presets: ["es2015"] })
      .code;

    const jsInterpreter = new Interpreter(tcode);
    if (jsInterpreter.run()) {
      // Ran until an async call.  Give this call a chance to run.
      // Then start running again later.
      setTimeout(runCode, 10);
    }
    setState({ ...state, outputValue: jsInterpreter.value });
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
        <Button onClick={runCode}>Run Code</Button>
      </span>
    </Paragraph3>
  );
};
