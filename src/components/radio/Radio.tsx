import React, { useState } from "react";
import { T_Radio } from "type";
import { Check } from "common";
import { Label } from "components";

type Props = T_Radio.Props;

export function Radio(props: Props) {
  const { children, value, name, defaultChecked, disabled, title, check, setCheck } = props;

  // const onChangeHandler = (e: React.on) => {
  //   setCheck(e.target.);
  // };

  return (
    <label>
      <input
        type="radio"
        checked={check === value}
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
  const [check, setCheck] = useState<number>(0);

  return (
    <fieldset>
      <legend>{label && label}</legend>
      {children.map((child, index) => {
        return React.cloneElement(child, { check, setCheck });
      })}
    </fieldset>
  );
}

Radio.Group = RadioGroup;
