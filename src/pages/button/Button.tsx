import * as React from "react";

interface I_ButtonProps {
  children?: JSX.Element | string;
  st?: React.CSSProperties;
  type?: "button" | "submit";
}

export const Button: React.FunctionComponent<I_ButtonProps> = (props) => {
  return (
    <button style={props.st} type={props.type}>
      <div>{props.children ? props.children : "Button"}</div>
    </button>
  );
};
