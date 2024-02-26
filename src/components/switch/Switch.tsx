import React from "react";
import classNames from "classnames";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Switch(props: Props) {
  const { disabled, onChange, value, ...res } = props;

  return (
    <label id="ui_switch">
      <input type="checkbox" onChange={onChange} {...res} />
      <span className={classNames("slider")} />
    </label>
  );
}
