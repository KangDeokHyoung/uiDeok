import Portal from "components/portal/Portal";
import React, { useState, createContext, Dispatch } from "react";
import { T_Dialog } from "type";

type Context = {
  toggle: boolean;
  setToggle: Dispatch<boolean>;
  children: (closeHandler: Dispatch<boolean>) => void;
} | null;

export function Dialog(props: T_Dialog.Props) {
  const { children, disabled, content } = props;
  const Context = createContext<Context>(null);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          if (!disabled) setToggle(true);
        }}
      >
        {children}
      </div>
      {toggle && <Portal toggle={toggle} setToggle={setToggle} content={content} />}
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
  return <div>{children}</div>;
}

Dialog.Base = Base;
Dialog.Content = Content;
