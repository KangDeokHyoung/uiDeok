import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  st?: React.CSSProperties;
  className?: string;
}

export const FlexBox: React.FC<Props> = (props) => {
  const { children, st, className } = props;
  const { justifyContent, alignItems } = { ...st };
  const justifyContents = justifyContent ? justifyContent : "flex-start";
  const alignItem = alignItems ? alignItems : "center";

  return (
    <div
      style={{
        ...st,
        display: "flex",
        justifyContent: justifyContents,
        alignItems: alignItem,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
