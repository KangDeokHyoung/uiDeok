import React, { Dispatch, HTMLInputTypeAttribute } from "react";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { T_Input } from "type";

const InputLock: React.FC<T_Input.Props & { setType: Dispatch<HTMLInputTypeAttribute> }> = (props) => {
  const {
    disabled,
    readOnly,
    type = "text",
    setType,
    LockClosed = <AiFillLock />,
    LockOpend = <AiFillUnlock />,
  } = props;

  return (
    <button
      type="button"
      className="input-lock-icon"
      onClick={() => {
        if (!disabled || !readOnly) setType(type === "text" ? "password" : "text");
      }}
    >
      {type === "text" ? LockOpend : LockClosed}
    </button>
  );
};

export default InputLock;
