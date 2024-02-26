import { positionHanlder } from "common";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: JSX.Element;
  toggle: boolean;
  buttonRef: Element;
  gap?: number;
  position?:
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

const TooltipPortal = (props: Props) => {
  const { children, toggle, buttonRef, position = "bottom left", gap = 12 } = props;
  const tooltipRoot = document.createElement("div");
  const body = document.querySelector("body");
  const tooltipRootRef = useRef(null);

  const uiButton = buttonRef.getBoundingClientRect();

  useEffect(() => {
    if (body) {
      if (toggle) {
        tooltipRoot.classList.add("tooltip-content");

        if (tooltipRootRef.current) {
          const resouce = {
            buttonNode: uiButton,
            target: tooltipRootRef.current as HTMLDivElement,
            gap,
            position,
          };
          positionHanlder(resouce);
        }
        body.append(tooltipRoot);
      }
    }

    return () => {
      if (toggle) body && body.removeChild(tooltipRoot);
    };
  }, [body, toggle, tooltipRoot]);

  const contents = (
    <div className="tooltip-box" ref={tooltipRootRef}>
      {children}
    </div>
  );

  return createPortal(contents, tooltipRoot);
};

export default TooltipPortal;
