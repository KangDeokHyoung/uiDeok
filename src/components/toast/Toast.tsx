import React, { useState, useRef, createContext, useContext } from "react";
import Portal from "./portal/Portal";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { N_Toast } from "type/toast";
import Provider from "./Provider";

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

export const Context = createContext<N_Toast.Context>({
  alert: [],
  set() { /* prettier-ignore */ },
  remove() { /* prettier-ignore */ },
  clear() { /* prettier-ignore */ },
});
export const AlertContext = () => useContext(Context);

function Toast(props: Props) {
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

  const { alert, clear } = useContext(Context);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div id="popover">
      <div className={classNames("toast-area", disabled)}>{React.cloneElement(children, { disabled })}</div>
      {/* <CSSTransition
        in={!!ref.current && alert.length}
        mountOnEnter
        unmountOnExit
        timeout={transition ? 300 : 0}
      >
        <Portal {...props} anchor={children ? ref.current : null} />
      </CSSTransition> */}
    </div>
  );
}

Toast.Provider = Provider;
Toast.Consumer = Context.Consumer;
Toast.Context = AlertContext;

export default Toast;
