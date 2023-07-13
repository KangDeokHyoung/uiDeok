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
    <CSSTransition classNames="collapse" timeout={500} in={expanded}>
      {expanded ? (
        <div ref={acoRef} className="collapse">
          {children}
        </div>
      ) : (
        <></>
      )}
    </CSSTransition>
  );
}
