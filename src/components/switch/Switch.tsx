import React, { useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import classNames from "classnames";

type Props = {
  value?: number | boolean;
  disabled?: boolean;
  onChange?: (value: number) => void;
};

export function Switch(props: Props) {
  const { value, disabled, onChange } = props;
  const [toggle, setToggle] = useState(value);

  const onChangeHandler = () => {
    if (disabled) return;
    const changeHandler = onChange ?? setToggle;
    changeHandler(value ? 0 : 1);
  };

  return (
    <label id="ui_switch" onClick={onChangeHandler}>
      <input type="checkbox" checked={!toggle} />
      <div className="slider" />
    </label>
  );
}
