import React from "react";
import CM from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import "./darcula.scss";

interface Props {
  value?: string;
}
export function CodeMirror(props: Props) {
  return <CM value={props.value} theme="dark" editable={false} extensions={[javascript({ jsx: true }), css()]} />;
}

CodeMirror.defaultProps = { value: "", mode: "jsx" };
