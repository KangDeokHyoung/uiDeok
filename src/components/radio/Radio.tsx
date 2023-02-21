import React from "react";
import { T_Radio } from "type";
import { Check } from "common";
import { Label } from "components";

type Props = T_Radio.Props;

export function Radio(props: Props) {
  const { children, value, name, defaultChecked, disabled } = props;
  return (
    <label>
      <input type="radio" value={value} name={name} defaultChecked={defaultChecked} disabled={disabled} />
      {children}
    </label>
  );
}

// function RadioGroup({ label, children }: ) {
//   return (
//     <fieldset>
//       <legend>{label}</legend>
//       {children}
//     </fieldset>
//   );
// }

// Radio.Group = RadioGroup;
