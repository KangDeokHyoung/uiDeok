import React, { useState } from "react";
import classNames from "classnames";
import InputLock from "../input/InputLock";
import { Loading } from "components";
import { T_Button } from "type";

export const Button: React.FC<T_Button.Props> = (props) => {
  const { children, st, type, className, onClick, disabled, loading } = props;

  return (
    <button
      disabled={disabled}
      style={st}
      type={type}
      className={classNames("ui_button", { className: !!className, disabled })}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className={classNames("text", { className: !!className })}>{children ? children : "Button"}</div>
      )}
    </button>
  );
};
