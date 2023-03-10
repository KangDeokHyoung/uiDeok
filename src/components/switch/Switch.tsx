import React, { ChangeEvent, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import classNames from "classnames";

type Props = {
  disabled?: boolean;
  onChange?: (value: number) => void;
  value?: number | boolean;
};

export function Switch(props: Props) {
  const { disabled, onChange = () => false, value } = props;
  const [toggle, setToggle] = useState(0);

  const check = value ?? toggle;

  const onChangeHandler = () => {
    if (disabled) return;
    const changeHandler = onChange ?? setToggle;
    changeHandler(check ? 0 : 1);
    if (!value) setToggle(check ? 0 : 1);
  };

  return (
    <label id="ui_switch" onClick={onChangeHandler}>
      <input type="checkbox" />
      <div className="slider" />
    </label>
  );
}
