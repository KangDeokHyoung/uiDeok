import React from "react";
import { CodeMirror } from "./CodeMirror";
import "./CodeMirrorContext.scss";

interface Props {
  source: string;
  title: string;
}

export const CodeMirrorContext = (props: Props) => {
  const { source, title } = props;

  return (
    <div className="code-mirror-context">
      <div className="title">{title}</div>
      <div className="box">
        <CodeMirror value={source} />
      </div>
    </div>
  );
};
