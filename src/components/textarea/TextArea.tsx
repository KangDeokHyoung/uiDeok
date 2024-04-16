import React, { useState } from "react";
import classNames from "classnames";

interface Props {
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  error?: string | boolean;
}

export const TextArea = (props: Props) => {
  const { onChange, className = "", placeholder, error = false, disabled, value } = props;
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div id="text-area">
      <div className="content">
        <textarea
          disabled={disabled}
          onChange={onChangeHandler}
          className={classNames({ [className]: className, error })}
          placeholder={placeholder}
          value={value}
        />
      </div>
      <div className={classNames({ error })}>{error}</div>
    </div>
  );
};
