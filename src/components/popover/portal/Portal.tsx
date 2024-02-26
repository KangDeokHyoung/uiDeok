/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { addPopHandler } from "./resource/Resource";
import { debounce } from "lodash";
import "./Portal.scss";

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

  useEffect(() => {
    if (nodeRef.current) addPopHandler({ buttonNode: element, target: nodeRef.current, gap, position });
  }, [nodeRef.current]);

  useEffect(() => {
    const closeOutSideHandler = ((target: HTMLDivElement | null) => (e: MouseEvent) => {
      //contains 특정 dom안에 해당 target의 dom이 있는지 확인 boolean1
      if (!target?.contains(e.target as Element) && !clickOutSide) {
        return;
      }
      if (target?.contains(e.target as Element) && !clickInSide) {
        return;
      }
      closeHandler();
      if (onChange) onChange(false);
    })(nodeRef.current);
    const delay = debounce(closeOutSideHandler, 100);

    document.body.addEventListener("mousedown", delay);
    return () => {
      document.body.removeEventListener("mousedown", delay);
    };
  }, []);

  const contents = (
    <div className={classNames("popover-portal", { [className]: className })} ref={nodeRef}>
      <div className="content-box">{content({ closeHandler })}</div>
    </div>
  );
  return createPortal(contents, body);
};

export default Portal;
