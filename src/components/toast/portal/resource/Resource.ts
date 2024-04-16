export const addPopHandler = ({
  buttonNode,
  target,
  gap,
  position,
}: {
  buttonNode: Element;
  target: HTMLDivElement;
  gap: number;
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
}) => {
  const uiButton = buttonNode as HTMLDivElement;
  const d = uiButton?.getBoundingClientRect();
  target.style.left = d.left + "px";
  target.style.top = d.height + d.top + gap + "px";
  const t = target.getBoundingClientRect();

  switch (position) {
    case "top left":
      target.style.top = d.top - t.height - gap + "px";
      target.style.left = d.left + "px";
      break;
    case "top center":
      target.style.top = d.top - t.height - gap + "px";
      target.style.left = d.width / 2 + d.left - t.width / 2 + "px";
      break;
    case "top right":
      target.style.top = d.top - t.height - gap + "px";
      target.style.left = d.left - (t.width - d.width) + "px";
      break;
    case "bottom center":
      target.style.top = d.height + d.top + gap + "px";
      target.style.left = d.width / 2 + d.left - t.width / 2 + "px";
      break;
    case "bottom left":
      target.style.top = d.height + d.top + gap + "px";
      target.style.left = d.left + "px";
      break;
    case "bottom right":
      target.style.top = d.height + d.top + gap + "px";
      target.style.left = d.left - (t.width - d.width) + "px";
      break;
    case "left top":
      target.style.top = d.top + "px";
      target.style.left = d.left - t.width - gap + "px";
      break;
    case "left center":
      target.style.top = d.top + d.height / 2 - t.height / 2 + "px";
      target.style.left = d.left - t.width - gap + "px";
      break;
    case "left bottom":
      target.style.top = d.bottom - t.height + "px";
      target.style.left = d.left - t.width - gap + "px";
      break;
    case "right top":
      target.style.top = d.top + "px";
      target.style.left = d.left + (t.width - d.width) + gap + "px";
      break;
    case "right center":
      target.style.top = d.top + d.height / 2 - t.height / 2 + "px";
      target.style.left = d.left + (t.width - d.width) + gap + "px";
      break;
    case "right bottom":
      target.style.top = d.bottom - t.height + "px";
      target.style.left = d.left + (t.width - d.width) + gap + "px";
      break;
  }
};
