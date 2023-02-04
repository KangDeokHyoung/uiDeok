import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { T_Input } from "type";
import InputLock from "./InputLock";

export const Input: React.FC<T_Input.Props> = (props) => {
  const { placeholder = "입력값이 필요합니다.", inputRef, st, type, ...rest } = props;
  const [_type, setType] = useState(type);
  console.log({ _type });

  return (
    <div id="ui_input" style={st}>
      <input {...rest} ref={inputRef} placeholder={placeholder} type={_type} />
      {type === "password" && <InputLock setType={setType} type={_type} />}
    </div>
  );
};
