import React, { useState, useRef } from "react";
import classNames from "classnames";
import InputLock from "../input/InputLock";
import { Loading } from "components";
import { T_Button } from "type";
import { debounce } from "lodash";

export const Button: React.FC<T_Button.Props> = (props) => {
  const { children, st, type, className, onClick, disabled, loading, ripple = true } = props;
  const rippleRef = useRef(null);

  const rippleRemoveHandler = (target: HTMLDivElement) => {
    const children = target.querySelectorAll(".ripple_circle");
    if (children.length) target.innerHTML = "";
  };

  const time = debounce(rippleRemoveHandler, 2000);

  const rippleHandler = async (e: React.MouseEvent<HTMLButtonElement>, target: HTMLDivElement) => {
    time.cancel();
    const onRippleSpan = document.createElement("span");
    onRippleSpan.classList.add("ripple_circle");
    if (target.parentElement) {
      const uiBttton = target.parentElement;
      const uiBtttoncircle = uiBttton.getBoundingClientRect();
      target.appendChild(onRippleSpan);
      const d = Math.max(uiBtttoncircle.width, uiBtttoncircle.height);
      onRippleSpan.style.width = d + "px";
      onRippleSpan.style.height = d + "px";
      onRippleSpan.style.left = e.clientX - uiBtttoncircle.left - d / 2 + "px"; //
      onRippleSpan.style.top = e.clientY - uiBtttoncircle.top - d / 2 + "px";
      onRippleSpan.classList.add("active");
    }
    time(target);
  };

  const onClickHanldler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (ripple && rippleRef.current) rippleHandler(e, rippleRef.current);
  };

  return (
    <button
      disabled={disabled}
      style={st}
      type={type}
      className={classNames("ui_button", { className: !!className, disabled })}
      onClick={onClickHanldler}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className={classNames("text", { className: !!className })}>{children ? children : "Button"}</div>
      )}
      <div className="ripple" ref={rippleRef}></div>
    </button>
  );
};
