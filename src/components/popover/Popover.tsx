import React, { useState, useRef, useEffect } from "react";
import Portal from "./portal/Portal";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

interface Props {
  content: (props: { closeHandler: () => void }) => JSX.Element;
  children: JSX.Element;
  disabled?: boolean;
  className?: string;
  onChange?: (toggle: boolean) => void;
  open?: boolean;
  gap?: number;
  clickOutSide?: boolean;
  clickInSide?: boolean;
  position?:
    | "top left"
    | "top center"
    | "top right"
    | "bottom left"
    | "bottom center"
    | "bottom right"
    | "left top"
    | "left center"
    | "left bottom"
    | "right top"
    | "right center"
    | "right bottom";
}

export const Popover = (props: Props) => {
  const {
    children,
    content,
    onChange,
    disabled,
    className,
    open = false,
    gap = 20,
    clickOutSide = true,
    clickInSide = false,
    position = "bottom left",
  } = props;
  const [toggle, setToggle] = useState(open);
  const onChages = onChange ? onChange : setToggle;

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) setToggle(!toggle);
    onChages(!toggle);
  };

  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div id="popover">
      <div className={classNames("popover-area", disabled)} onClick={onClickHandler} ref={buttonRef}>
        {React.cloneElement(children, { disabled })}
      </div>
      <CSSTransition in={toggle} timeout={0} unmountOnExit mountOnEnter classNames="pop">
        <Portal
          className={className}
          content={content}
          closeHandler={() => setToggle(false)}
          gap={gap}
          clickOutSide={clickOutSide}
          clickInSide={clickInSide}
          position={position}
          element={buttonRef.current as Element}
          onChange={onChange}
        >
          <div>{content({ closeHandler: () => setToggle(false) })}</div>
        </Portal>
      </CSSTransition>
    </div>
  );
};
