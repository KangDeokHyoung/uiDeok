import React, { Children } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  st?: React.CSSProperties;
  className?: string;
}

export const Box: React.FC<Props> = (props) => {
  const { children, st, className } = props;

  const childNode = Children.map(children, (child, i) => child);
  return (
    <div style={st} className={className}>
      {childNode}
    </div>
  );
};
