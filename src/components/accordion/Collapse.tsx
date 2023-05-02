import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useAccordion } from "./Accordion";

interface Props {
  children: React.ReactNode | string;
}

export function Collapse(props: Props) {
  const { children } = props;
  const { expanded } = useAccordion();

  const acoRef = useRef(null);

  return (
    <CSSTransition classNames="collapse" nodeRef={acoRef} timeout={200} in={expanded}>
      <div className="collapse">{children}</div>
    </CSSTransition>
  );
}
