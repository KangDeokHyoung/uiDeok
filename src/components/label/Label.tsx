import React from "react";

interface Props {
  text: string | JSX.Element;
  required?: boolean;
}

export const Label: React.FC<Props> = (props) => {
  const { text, required } = props;
  return (
    <div id="ui-label">
      {required && <span>*</span>}
      <div>{text}</div>
    </div>
  );
};
