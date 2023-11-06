import React, { useRef } from "react";
import { useAccordion } from "./Accordion";
import { CSSTransition } from "react-transition-group";

interface Props {
  children: React.ReactNode | string;
}

export function Collapse(props: Props) {
  const { children } = props;
  const { expanded } = useAccordion();

  const acoRef = useRef(null);

  return (
    <CSSTransition nodeRef={acoRef} classNames="transition-coll" unmountOnExit timeout={500} in={expanded}>
      <div ref={acoRef} className="collapse">
        <div className="container">{children}</div>
      </div>
    </CSSTransition>
  );
}
