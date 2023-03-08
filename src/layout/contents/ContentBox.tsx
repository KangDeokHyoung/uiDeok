import React from "react";
import "./ContentBox.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ContentBox: React.FC<Props> = (props) => {
  return <div id="content-box">{Array.isArray(props.children) ? props.children.map((el) => el) : props.children}</div>;
};
