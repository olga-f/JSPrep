import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export const CodeEditor = (challenge:string): JSX.Element=> { 
  const [code, setCode] = useState(challenge)

  return (
    <Editor
    value={code}
    onValueChange={(code) => setCode(code)}
    highlight={(code) => highlight(code, languages.js)}
    padding={10}
  />
  )
};
