import React, { useState, useRef, useEffect } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { T_Input } from "type";
import InputLock from "./InputLock";
import classNames from "classnames";

export const Input: React.FC<T_Input.Props> = (props) => {
  const { placeholder = "입력값이 필요합니다.", inputRef, st, type, error, ...rest } = props;
  const [focus, setFocus] = useState(false);
  const [_type, setType] = useState(type);

  const refs = useRef<HTMLInputElement>(null);

  return (
    <div id="ui_input" style={st} className={classNames({ focus, error })}>
      {/* {<Label} */}
      <input {...rest} ref={refs || inputRef} placeholder={placeholder} type={_type} />
      {type === "password" && <InputLock setType={setType} type={_type} />}
    </div>
  );
};
