import React from "react";
import { T_CheckBox } from "type";
import { Check } from "common";

type Props = T_CheckBox.Props;

export const CheckBox: React.FC<Props> = (props) => {
  return (
    <div id="check-box" style={props.st}>
      <div className="container">
        <input type="checkbox" ref={props.inputRef} />
        <Check className="check-icon" style={{ color: "white" }} />
      </div>
      {props.label && <label className="label">{props.label}</label>}
    </div>
  );
};
