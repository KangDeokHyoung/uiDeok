/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { addPopHandler } from "./resource/Resource";
import { debounce } from "lodash";
import "./Portal.scss";
import { CSSTransition } from "react-transition-group";

interface Props {
  className?: string;
  content: (props: { closeHandler: () => void }) => JSX.Element;
  closeHandler: () => void;
  children: JSX.Element | string;
  gap: number;
  clickOutSide?: boolean;
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

const Portal = (props: Props) => {
  const { className = "", closeHandler, content, gap, clickInSide, clickOutSide, position, element, onChange } = props;
  const body = document.querySelector("body") as HTMLBodyElement;
  const nodeRef = useRef(null);

  // const list = (
  //   <div id={props.id} ref={rootRef} className={CSSSkewX(cn.concat("__wrapper"), { [className]: className })}>
  //     <TransitionGroup className={cx(cn.concat("__list"))}>
  //       {alert.map((item: N_Toast.Alert) => (
  //         <CSSTransition in key={item.id} timeout={props.transition ? 500 : 0}>
  //           <Text item={item} />
  //         </CSSTransition>
  //       ))}
  //     </TransitionGroup>
  //   </div>
  // );
  return "";
};

export default Portal;
