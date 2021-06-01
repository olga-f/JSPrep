import { useStyletron } from "baseui";
import { Button, KIND, SIZE } from "baseui/button";
import { Cell, Grid } from "baseui/layout-grid";
import { KIND as TYPE, Notification } from "baseui/notification";
import { useEffect, useRef, useState } from "react";

import { Compartment, EditorState } from "@codemirror/state";
import { EditorView, ViewUpdate } from "@codemirror/view";
import beautify from "js-beautify";

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
    workerRef.current = new Worker(new URL("./worker.js", import.meta.url));
    workerRef.current?.postMessage(code);
    sleep(3000).then(() => {
      // stop running the worker after 3 seconds, if any
      workerRef.current?.terminate();
      setLoading(false);
    });
    workerRef.current.onmessage = (evt) => {
      const { result, message } = evt.data;

      if (result) {
        setOutput({ ...output, value: beautify(result), error: "" });
        workerRef.current?.terminate();
        setLoading(false);
      }
      if (message) {
        setOutput({ ...output, value: "", error: message });
        workerRef.current?.terminate();
        setLoading(false);
      }
    };
    workerRef.current.onerror = () => {
      setOutput({
        ...output,
        value: "",
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
      <Cell
        span={[4, 8, 12]}
        overrides={{
          Cell: {
            style: () => ({
              paddingRight: "0px !important",
            }),
          },
        }}
      >
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
      <Cell span={[4, 8, 8]}
       overrides={{
        Cell: {
          style: () => ({
            paddingRight: "0px !important",
          }),
        },
      }}>
        {output.error ? <OutputError /> : null}
        {output.value ? <OutputResult /> : null}
      </Cell>
      <Cell
        span={[4, 8, 4]}
        overrides={{
          Cell: {
            style: () => ({
              textAlign: "right",
              paddingBottom: theme.sizing.scale1600,
              paddingLeft: "0px !important",
              paddingRight: "0px !important",
            }),
          },
        }}
      >
        <Button
          kind={KIND.secondary}
          size={SIZE.compact}
          onClick={() => resetCode()}
        >
          Reset
        </Button>
        <span
          className={css({
            marginLeft: theme.sizing.scale550,
            marginRight: "-2px",
          })}
        >
          <Button
            size={SIZE.compact}
            onClick={() => runCode(state)}
            isLoading={loading}
          >
            Run Code
          </Button>
        </span>
      </Cell>
    </Grid>
  );
};

export default Codemirror;
