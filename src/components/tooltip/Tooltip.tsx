import React, { useState, useRef } from "react";
import TooltipPortal from "./portal/TooltipPortal";
import { CSSTransition } from "react-transition-group";

type Position =
  | "bottom left"
  | "bottom center"
  | "bottom right"
  | "top left"
  | "top center"
  | "top right"
  | "left top"
  | "left center"
  | "left bottom"
  | "right top"
  | "right center"
  | "right bottom";

interface Props {
  children: JSX.Element;
  className?: string;
  content: () => JSX.Element | string;
  disabled?: boolean;
  gap?: number;
  radius?: number;
  position?: Position;
}

export const Tooltip = (props: Props) => {
  const { disabled, position = "right-center", content, children } = props;
  const [toggle, setToggle] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setToggle(!toggle);
  };

  return (
    <div id="tooltip">
      <div ref={buttonRef} onMouseEnter={toggleHandler} onMouseLeave={toggleHandler}>
        {children}
      </div>

      <CSSTransition classNames="transition-Tooltip" unmountOnExit timeout={100} in={toggle}>
        <TooltipPortal toggle={toggle} buttonRef={buttonRef.current as Element}>
          <>{content()}</>
        </TooltipPortal>
      </CSSTransition>
    </div>
  );
};
