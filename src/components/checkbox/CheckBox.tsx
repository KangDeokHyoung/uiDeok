import React, { useState, useEffect } from "react";
import { T_CheckBox } from "type";
import { Check } from "common";
import { Label } from "components";

type Props = T_CheckBox.Props;

export const CheckBox: React.FC<Props> = (props) => {
  const { checked, onChange } = props;
  const [check, setCheck] = useState(checked);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const checkComp = (
    <div className="container">
      <input
        type="checkbox"
        ref={props.inputRef}
        checked={check}
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
      />
      <Check className="check-icon" style={{ color: "white", fontSize: 20 }} />
    </div>
  );

  return (
    <div id="check-box" style={props.st}>
      {props.label ? (
        <label className="label-row">
          {checkComp}
          <Label className="label" text={props.label as string} />
        </label>
      ) : (
        <>{checkComp}</>
      )}
    </div>
  );
};
