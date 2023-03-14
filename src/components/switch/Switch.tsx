import React, { ChangeEvent, useEffect, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import classNames from "classnames";

type Props = {
  disabled?: boolean;
  onChange?: (value: number) => void;
};

export function Switch(props: Props) {
  const { disabled, onChange = () => false } = props;
  const [toggle, setToggle] = useState(0);

  const check = toggle;

  useEffect(() => {
    if (onChange) onChange(toggle);
  }, [toggle]);

  const onChangeHandler = () => {
    if (disabled) return;
    setToggle(check ? 0 : 1);
  };

  return (
    <div id="ui_switch" onClick={onChangeHandler}>
      <div className={classNames("slider", { checked: !!toggle })} />
    </div>
  );
}
