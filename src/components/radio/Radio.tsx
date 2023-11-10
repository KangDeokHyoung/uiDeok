import React, { useState, useEffect } from "react";
import { T_Radio } from "type";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import classNames from "classnames";

type Props = T_Radio.Props;

export function Radio(props: Props) {
  const { children, value, disabled, title, check, setCheck, st, className } = props;

  const onChangeHandler = () => {
    if (disabled) return;
    setCheck(value);
  };
  const defaultStyle = { color: "#007acc", fontSize: 20 };

  return (
    <div id="ui_radio_item" onClick={onChangeHandler}>
      <div className={classNames("radio-item", { className: className ?? false })}>
        {check === value && <IoMdRadioButtonOn style={{ ...defaultStyle, ...st }} />}
        {check !== value && <IoMdRadioButtonOff style={{ ...defaultStyle, ...st }} />}
      </div>
      <div className="radio-title">{title}</div>
      {children}
    </div>
  );
}

type PropsGroup<T> = {
  children: JSX.Element[];
  vlaue?: T;
  onChange?: (check: number | T) => void;
};

function RadioGroup<T>({ children, onChange, vlaue }: PropsGroup<T>) {
  const [check, setCheck] = useState<number>(0);

  const VALUE = vlaue ?? check;

  useEffect(() => {
    if (onChange) onChange(VALUE);
  }, [check, onChange]);

  return (
    <fieldset id="ui_radio_group">
      {children.map((child, index) => (
        <React.Fragment key={index}>{React.cloneElement(child, { check, setCheck })}</React.Fragment>
      ))}
    </fieldset>
  );
}

Radio.Group = RadioGroup;
