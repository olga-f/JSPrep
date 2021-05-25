import { useStyletron } from "baseui";
import { Button, KIND, SIZE } from "baseui/button";
import { Cell, Grid } from "baseui/layout-grid";
import { KIND as TYPE, Notification } from "baseui/notification";
import { useEffect, useRef, useState } from "react";

import { Compartment, EditorState } from "@codemirror/state";
import { EditorView, ViewUpdate } from "@codemirror/view";

const ERROR_RUNNING = "An Error occurred while running.";
const sleep = (time: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

const Codemirror: React.FC<{ initialValue: string }> = ({ initialValue }) => {
  const initialOutput = {
    value: "",
    error: "",
  };

  const workerRef = useRef<Worker>();
  const editor = useRef<EditorView>();

  const [state, setState] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(initialOutput);

  const initEditorView = async () => {
    const element = document.getElementById("editor");
    if (editor.current) element?.children[0].remove();
    const onUpdate = () =>
      EditorView.updateListener.of((v: ViewUpdate) => {
        const doc = v.state.doc;
        const value = doc.toString();
        if (value !== state) {
          setState(value);
          setOutput(initialOutput);
        }
      });
    const js = (await import("@codemirror/lang-javascript")).javascript;
    const setup = (await import("@codemirror/basic-setup")).basicSetup;
    const beautify = (await import("js-beautify")).default;

    const language = new Compartment();
    editor.current = new EditorView({
      state: EditorState.create({
        doc: beautify(initialValue),
        extensions: [setup, language.of(js()), onUpdate()],
      }),
      parent: element as Element,
    });
  };

  useEffect(() => {
    initEditorView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const runCode = (code: string) => {
    setLoading(true);

    sleep(5000).then(() => {
      // stop running the worker after 5 seconds, if any
      workerRef.current?.terminate();
      setLoading(false);
     
    });

    workerRef.current = new Worker(new URL("./worker.js", import.meta.url));
    workerRef.current?.postMessage(code);
    workerRef.current.onmessage = (evt) => {
      const { result, message } = evt.data;

      if (result) {
        setOutput({ ...output, value: result });
        workerRef.current?.terminate();
        setLoading(false);
      }
      if (message) {
        setOutput({ ...output, error: message });
        workerRef.current?.terminate();
        setLoading(false);
      }
    };
    workerRef.current.onerror = () => {
      setOutput({
        ...output,
        error: ERROR_RUNNING,
      });
      workerRef.current?.terminate();
      setLoading(false);
    };
  };
  const resetCode = () => {
    workerRef.current?.terminate();
    setState(initialValue);

    setLoading(false);
    //  editor.current?.destroy();
    initEditorView();
  };

  const OutputResult = () => (
    <Notification
      overrides={{
        Body: { style: { width: "auto" } },
      }}
    >
      <pre>
        <code
          className={css({
            whiteSpace: "break-spaces",
          })}
        >
          {output.value}
        </code>
      </pre>
    </Notification>
  );
  const OutputError = () => (
    <Notification
      kind={TYPE.negative}
      overrides={{
        Body: { style: { width: "auto" } },
      }}
    >
      <pre>
        <code
          className={css({
            whiteSpace: "break-spaces",
          })}
        >
          {output.error}
        </code>
      </pre>
    </Notification>
  );

  const [css, theme] = useStyletron();

  return (
    <Grid gridMargins={0}>
      <Cell span={[4, 8, 12]}>
        <div
          className={css({
            ...theme.borders.border600,
            fontSize: theme.sizing.scale550,
            width: "100%",
            minHeight: "350px",
          })}
          id="editor"
        ></div>
      </Cell>
      <Cell span={[4, 8, 8]}>
        {output.error ? <OutputError /> : null}
        {output.value ? <OutputResult /> : null}
      </Cell>
      <Cell span={[4, 8, 4]}
        overrides={{
          Cell: {
            style: () => ({
              textAlign: "right",
              paddingBottom: theme.sizing.scale1600,
            }),
          },
        }}
      >
        <Button kind={KIND.secondary} size={SIZE.compact} onClick={() => resetCode()}>
          Reset
        </Button>
        <span
          className={css({
            marginLeft: theme.sizing.scale550,
            marginRight: "-2px",
          })}
        >
          <Button size={SIZE.compact} onClick={() => runCode(state)} isLoading={loading}>
            Run Code
          </Button>
        </span>
      </Cell>
    </Grid>
  );
};

export default Codemirror;
