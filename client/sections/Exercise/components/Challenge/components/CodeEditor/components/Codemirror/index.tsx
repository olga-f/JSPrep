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

export const Codemirror: React.FC<{ initialValue: string }> = ({
  initialValue,
}) => {
  const [editorValue, setEditorValue] = useState<string>("");
  const editor = useRef<EditorView>();

  // Event listener on editor updates
  const onUpdate = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;
      const value = doc.toString();
      if (value !== editorValue) {
        setEditorValue(value);
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

  // Component for output code from editor
  // const OutputText = () => (
  //   <pre>
  //     <code>{editorValue}</code>
  //   </pre>
  // );
  const [css, theme] = useStyletron();

  return (
    <Paragraph3
      className={css({
        position: "relative",
      })}
    >
      <div id="editor"></div>

      <span
        className={css({
          position: "absolute",
          bottom: theme.sizing.scale300,
          right: theme.sizing.scale100,
        })}
      >
        <Button>Reset Code</Button>
        <span className={css({ marginLeft: theme.sizing.scale300 })} />
        <Button>Run Code</Button>
      </span>
    </Paragraph3>
  );
};
