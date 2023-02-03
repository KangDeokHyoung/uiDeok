import React from "react";
import classNames from "classnames";

type I_ButtonProps = {
  children?: JSX.Element | string;
  st?: React.CSSProperties;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC<I_ButtonProps> = (props) => {
  const { children, st, type, className, onClick, disabled } = props;
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
      <div className={classNames("text", { className: !!className })}>{children ? children : "Button"}</div>
    </button>
  );
};
