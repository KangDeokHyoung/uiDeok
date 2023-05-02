import React, { useState } from "react";
import classNames from "classnames";

type Props = {
  disabled?: boolean;
  onChange?: (value: number) => void;
  value?: number;
};

export function Switch(props: Props) {
  const { disabled, onChange, value } = props;
  const [toggle, setToggle] = useState(0);
  const check = value ?? toggle;

  const onChangeHandler = () => {
    if (disabled) return;
    const change = onChange ?? setToggle;
    change(check ? 0 : 1);
  };

  return (
    <div id="ui_switch" onClick={onChangeHandler}>
      <div className={classNames("slider", { checked: !!check })} />
    </div>
  );
}
