import React from "react";

interface Props {
  text: string | JSX.Element;
}

export const Label: React.FC<Props> = (props) => {
  const { text } = props;
  return (
    <div id="ui-label">
      <span>*</span>
      <div>{text}</div>
    </div>
  );
};
