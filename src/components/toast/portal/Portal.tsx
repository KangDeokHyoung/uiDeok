/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import React, { useRef, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { addPopHandler } from "./resource/Resource";
import { debounce } from "lodash";
import "./Portal.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { N_Toast } from "type/toast";
import { Context } from "../Toast";
import Text from "./Text";

interface Props {
  className?: string;
  content: (props: { closeHandler: () => void }) => JSX.Element;
  closeHandler: () => void;
  children: JSX.Element | string;
  gap: number;
  clickOutSide?: boolean;
  id?: string;
  clickInSide?: boolean;
  onChange?: (toggle: boolean) => void;
  element: Element;
  position:
    | "top left"
    | "top center"
    | "top right"
    | "bottom left"
    | "bottom center"
    | "bottom right"
    | "left top"
    | "left center"
    | "left bottom"
    | "right top"
    | "right center"
    | "right bottom";
}

const Portal = (props: N_Toast.Portal.Props) => {
  const { className = "" } = props;
  const body = document.querySelector("body") as HTMLBodyElement;
  const rootRef = useRef(null);

  const { alert } = useContext(Context);

  const list = (
    <div
      ref={rootRef}
      id={props.id}
      className={classNames("ui_toast_wrapper bottom-center", { [className]: className })}
    >
      <TransitionGroup className="ui_toast_list">
        {alert.map((item: N_Toast.Alert) => (
          <CSSTransition in key={item.id} timeout={props.transition ? 500 : 0}>
            <Text item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
  return createPortal(list, body);
};

export default Portal;
