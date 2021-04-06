import { useRef, useEffect, useState } from "react";
import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const Codemirror: React.FC<{ initialValue: string }> = ({ initialValue }) => {
  // Local state
  const [editorValue, setEditorValue] = useState<string>("");

  // Ref of the editor
  const editor = useRef<EditorView>();

  // Event listener on editor updates
  const onUpdate = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;
      const value = doc.toString();
      if (value !== editorValue) setEditorValue(value);
    });

  // Initilize view
  useEffect(function initEditorView() {
    const el = document.getElementById("codemirror-editor-wrapper");
    editor.current = new EditorView({
      state: EditorState.create({
        doc: initialValue,
        extensions: [basicSetup, javascript(), oneDark, onUpdate()],
      }),
      parent: el as Element,
    });
  }, []);

  // Component for display text
  const OutputText = () => (
    <pre>
      <code>{editorValue}</code>
    </pre>
  );

  return (
    <div>
      <div id="codemirror-editor-wrapper" />
      <OutputText />
    </div>
  );
};

export default Codemirror;
