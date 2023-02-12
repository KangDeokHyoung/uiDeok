import React from "react";
import { T_Dialog } from "type";
import { createPortal } from "react-dom";
import classNames from "classnames";

const Portal: React.FC<T_Dialog.Portal.Props> = (props) => {
  const { content, className, toggle, setToggle } = props;
  const body = document.querySelector("body") as HTMLBodyElement;
  const contents = (
    <div className={classNames({ className })}>
      <div>{content && content({ closeHandler: () => setToggle(false) })}</div>
      <div className="di_background" role="button" onClick={() => console.log("들어옴")} />
    </div>
  );
  return createPortal(contents, body);
};

export default Portal;
