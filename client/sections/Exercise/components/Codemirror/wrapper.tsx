import { useRef, useEffect, useState } from "react";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState, Compartment } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import beautify_js from "js-beautify";
import { Button } from "baseui/button";
import { ButtonGroup, SIZE } from "baseui/button-group";
import { useStyletron } from "baseui";
import { Paragraph3 } from "baseui/typography";

const Codemirror: React.FC<{ initialValue: string }> = ({ initialValue }) => {
  // Local state
  const [editorValue, setEditorValue] = useState<string>("");
  // Ref of the editor
  const editor = useRef<EditorView>();

  // Event listener on editor updates
  const onUpdate = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;
      const value = beautify_js(doc.toString());
      if (value !== editorValue) {
        setEditorValue(value);
      }
    });

  // Initilize view
  useEffect(function initEditorView() {
    const el = document.getElementById("codemirror-editor-wrapper");
    const language = new Compartment();
    editor.current = new EditorView({
      state: EditorState.create({
        doc: beautify_js(initialValue),
        extensions: [
          basicSetup,
          language.of(javascript()),
          oneDark,
          onUpdate(),
        ],
      }),

      parent: el as Element,
    });
  }, []);

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
      <div id="codemirror-editor-wrapper"></div>
      <span
        className={css({
          position: "absolute",
          bottom: theme.sizing.scale300,
          right: theme.sizing.scale100,
        })}
      >
        <ButtonGroup size={SIZE.compact}>
          <Button>Reset Code</Button>
          <span className={css({ marginLeft: theme.sizing.scale300 })} />
          <Button>Run Code</Button>
        </ButtonGroup>
      </span>
    </Paragraph3>
  );
};

export default Codemirror;
