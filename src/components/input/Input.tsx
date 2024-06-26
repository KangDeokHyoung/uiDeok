import React, { useState, useRef } from "react";
import { T_Input } from "type";
import InputLock from "./InputLock";
import { Label } from "components";
import { Box } from "common";
import classNames from "classnames";

export const Input: React.FC<T_Input.Props> = (props) => {
  const { placeholder = "입력값이 필요합니다.", inputRef, st, value = "", type, error, ...rest } = props;
  const [_type, setType] = useState(type);

  const refs = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Box st={{ marginBottom: 3 }}>
        <>{rest.label && <Label text={rest.label} required />}</>
      </Box>
      <div id="ui_input" style={st} className={classNames({ error })}>
        <input {...rest} ref={refs || inputRef} placeholder={placeholder} type={_type} />
        {type === "password" && <InputLock setType={setType} type={_type} />}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
