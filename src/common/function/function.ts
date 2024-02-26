type Position =
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

export const positionHanlder = ({
  buttonNode,
  target,
  position,
  gap,
}: {
  buttonNode: DOMRect;
  target: HTMLDivElement;
  position: Position;
  gap: number;
}) => {
  const t = target.getBoundingClientRect();

  const parentNode = target.parentNode as HTMLDivElement;
  if (parentNode) {
    switch (position) {
      case "top left":
        parentNode.style.top = buttonNode.top - t.height - gap + "px";
        parentNode.style.left = buttonNode.left + "px";
        break;
      case "top center":
        parentNode.style.top = buttonNode.top - t.height - gap + "px";
        parentNode.style.left = buttonNode.width / 2 + buttonNode.left - t.width / 2 + "px";
        break;
      case "top right":
        parentNode.style.top = buttonNode.top - t.height - gap + "px";
        parentNode.style.left = buttonNode.left - (t.width - buttonNode.width) + "px";
        break;
      case "bottom center":
        parentNode.style.top = buttonNode.height + buttonNode.top + gap + "px";
        parentNode.style.left = buttonNode.width / 2 + buttonNode.left - t.width / 2 + "px";
        break;
      case "bottom left":
        parentNode.style.top = buttonNode.height + buttonNode.top + gap + "px";
        parentNode.style.left = buttonNode.left + "px";
        break;
      case "bottom right":
        parentNode.style.top = buttonNode.height + buttonNode.top + gap + "px";
        parentNode.style.left = buttonNode.left - (t.width - buttonNode.width) + "px";
        break;
      case "left top":
        parentNode.style.top = buttonNode.top + "px";
        parentNode.style.left = buttonNode.left - t.width - gap + "px";
        break;
      case "left center":
        parentNode.style.top = buttonNode.top + buttonNode.height / 2 - t.height / 2 + "px";
        parentNode.style.left = buttonNode.left - t.width - gap + "px";
        break;
      case "left bottom":
        parentNode.style.top = buttonNode.bottom - t.height + "px";
        parentNode.style.left = buttonNode.left - t.width - gap + "px";
        break;
      case "right top":
        parentNode.style.top = buttonNode.top + "px";
        parentNode.style.left = buttonNode.left + (t.width - buttonNode.width) + gap + "px";
        break;
      case "right center":
        parentNode.style.top = buttonNode.top + buttonNode.height / 2 - t.height / 2 + "px";
        parentNode.style.left = buttonNode.left + (t.width - buttonNode.width) + gap + "px";
        break;
      case "right bottom":
        parentNode.style.top = buttonNode.bottom - t.height + "px";
        parentNode.style.left = buttonNode.left + (t.width - buttonNode.width) + gap + "px";
        break;
    }
  }
};
