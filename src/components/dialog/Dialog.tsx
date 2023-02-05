import React, { useState } from "react";
import { T_Dialog } from "type";

type Context = {} | null;

export function Dialog(props: T_Dialog.Props) {
  const { children } = props;
  const Context = React.createContext<Context>(null);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* {children(() =>)} */}
      <div className="di-body"></div>
      <div className="di-footer"></div>
    </div>
  );
}

const Head: React.FC<{ title: string }> = (props) => {
  const { title } = props;
  return (
    <div className="di-head">
      <h4>{title}</h4>
      <span>x</span>
    </div>
  );
};

Dialog.Head = Head;
