import React from "react";

interface Props {
  children: JSX.Element;
  st?: React.CSSProperties;
  className?: string;
}

export const Box: React.FC<Props> = (props) => {
  const { children, st, className } = props;
  return (
    <div style={st} className={className}>
      {children}
    </div>
  );
};
