import React from "react";

interface Props {
  children: React.ReactNode | string;
}

export function Collapse(props: Props) {
  const { children } = props;
  return <div>{children}</div>;
}
