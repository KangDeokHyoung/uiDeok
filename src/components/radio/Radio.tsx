import React, { useState } from "react";
import { T_Radio } from "type";
import { Check } from "common";
import { Label } from "components";

type Props = T_Radio.Props;

export function Radio(props: Props) {
  const { children, value, name, defaultChecked, disabled, title } = props;
  return (
    <label>
      <input
        type="radio"
        checked={true}
        title={title}
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {children}
    </label>
  );
}

type PropsGroup<T> = {
  label?: string | JSX.Element;
  children: JSX.Element[];
  vlaue?: T;
};

function RadioGroup<T>({ label, children }: PropsGroup<T>) {
  const [check, setCheck] = useState("");
  return (
    <fieldset>
      <legend>{label && label}</legend>
      {children}
    </fieldset>
  );
}

Radio.Group = RadioGroup;
