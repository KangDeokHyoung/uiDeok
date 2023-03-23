import React from "react";
import "./ContentBox.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
  st?: React.CSSProperties;
}

export const ContentBox: React.FC<Props> = (props) => {
  return (
    <div id="content-box" style={props.st}>
      {Array.isArray(props.children) ? props.children.map((el) => el) : props.children}
    </div>
  );
};
