import { useRef, useEffect, useState } from "react";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState, Compartment } from "@codemirror/state";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import { Paragraph3 } from "baseui/typography";
import JSrunner from "javascript-code-runner";

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
    const beautify = (await import("js-beautify")).default;
    const el = document.getElementById("editor");
    const language = new Compartment();
    editor.current = new EditorView({
      state: EditorState.create({
        doc: beautify(initialValue),
        extensions: [setup, language.of(js()), onUpdate()],
      }),

      parent: el as Element,
    });
  };

  useEffect(() => {
    initEditorView();
  }, []);

  const runCode = (code: string) => {
    const { result, message } = JSrunner(code);
    if (result) {
      setState({ ...state, outputValue: result });
    }
    if (message) {
      setState({ ...state, outputValue: message });
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
