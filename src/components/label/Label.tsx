import React from "react";

interface Props {
  text: string | JSX.Element;
  required?: boolean;
  className?: string;
  st?: React.CSSProperties;
}

export const Label: React.FC<Props> = (props) => {
  const { className, text, required, st } = props;
  return (
    <div id="ui-label" className={className} style={st}>
      {required && <span>*</span>}
      <div className="text">{text}</div>
    </div>
  );
};
