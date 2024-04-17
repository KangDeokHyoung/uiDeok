import React, { useEffect, useContext } from "react";
import { debounce } from "lodash";
import { Context } from "../Toast";
import { N_Toast } from "type/toast";
import classNames from "classnames";

function Text(props: N_Toast.Text.Props) {
  const { remove } = useContext(Context);
  const { text, status, className = "" } = props.item;

  const removeHandler = (e: React.MouseEvent): void => {
    e.stopPropagation();
    remove(props.item.id);
  };

  useEffect(() => {
    const timer = debounce(() => {
      remove(props.item.id);
    }, 5000);
    timer();
    return (): void => timer.cancel();
  }, []);

  return (
    <div
      className={classNames("ui_toast_text", {
        [className]: className,
        success: status === "success",
        error: status === "error",
        info: status === "info",
        warning: status === "warning",
      })}
    >
      <span>{text}</span>
      <span onClick={removeHandler}>x</span>
      {/* <Icons.Close className={cx(cn.concat("__close"))}  /> */}
    </div>
  );
}

export default Text;
