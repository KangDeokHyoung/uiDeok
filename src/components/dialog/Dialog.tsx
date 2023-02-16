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

  console.log(toggle);

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
