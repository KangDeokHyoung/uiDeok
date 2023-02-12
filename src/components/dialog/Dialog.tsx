import Portal from "components/portal/Portal";
import React, { useState, createContext, Dispatch } from "react";
import { T_Dialog } from "type";

type Context = {
  toggle: boolean;
  setToggle: Dispatch<boolean>;
  children: (closeHandler: Dispatch<boolean>) => void;
} | null;

export function Dialog(props: T_Dialog.Props) {
  const { children, disabled } = props;
  const Context = createContext<Context>(null);
  const [toggle, setToggle] = useState(false);

  // const closeHandler = () => {
  //   setToggle(!toggle);
  // };
  return (
    <>
      <div
        onClick={() => {
          if (!disabled) setToggle(true);
        }}
      >
        {children}
      </div>
      <Portal toggle={toggle} setToggle={setToggle}></Portal>
    </>
  );
}

// const Head: React.FC<{ title: string }> = (props) => {
//   const { title } = props;
//   return (
//     <div className="di-head">
//       <h4>{title}</h4>
//       <span>x</span>
//     </div>
//   );
// };

// const Body: React.FC<{ title: string }> = (props) => {
//   const { title } = props;
//   return (
//     <div className="di-head">
//       <h4>{title}</h4>
//       <span>x</span>
//     </div>
//   );
// };

// Dialog.Head = Head;
// Dialog.Body = Body;
