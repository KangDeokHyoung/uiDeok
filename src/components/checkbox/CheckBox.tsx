import React from "react";
import { T_CheckBox } from "type";
import { Check } from "common";
import { Label } from "components";

type Props = T_CheckBox.Props;

export const CheckBox: React.FC<Props> = (props) => {
  return (
    <div id="check-box" style={props.st}>
      {props.label && (
        <label className="label-row">
          <div className="container">
            <input type="checkbox" ref={props.inputRef} />
            <Check className="check-icon" style={{ color: "white", fontSize: 20 }} />
          </div>
          <Label className="label" text={props.label as string} />
        </label>
      )}
    </div>
  );
};
