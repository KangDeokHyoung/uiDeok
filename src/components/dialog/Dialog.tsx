import Portal from "components/dialog/portal/Portal";
import React, { useState, useRef } from "react";
import { T_Dialog } from "type";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

// type Context = {
//   toggle: boolean;
//   setToggle: Dispatch<boolean>;
//   children: (closeHandler: Dispatch<boolean>) => void;
// } | null;

export function Dialog(props: T_Dialog.Props) {
  const { children, disabled, content, className = "" } = props;
  // const Context = createContext<Context>(null);
  const [toggle, setToggle] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <div
        onClick={() => {
          if (!disabled) setToggle(true);
        }}
      >
        {children}
      </div>
      <CSSTransition nodeRef={nodeRef} classNames="transition-dailog" unmountOnExit timeout={100} in={toggle}>
        <Portal
          nodeRef={nodeRef}
          toggle={toggle}
          className={classNames({ [className]: className })}
          setToggle={setToggle}
          content={content}
        />
      </CSSTransition>
    </>
  );
}

type BaseProps = {
  id?: string;
  children: JSX.Element;
};

type ContentsProps = {
  id?: string;
  children: JSX.Element | string;
};

function Base(props: BaseProps) {
  const { id, children } = props;
  return <div id={id}>{children}</div>;
}

function Content(props: ContentsProps) {
  const { id, children } = props;
  return <div id={id}>{children}</div>;
}

Dialog.Base = Base;
Dialog.Content = Content;
