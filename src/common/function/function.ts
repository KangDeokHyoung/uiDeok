import { useEffect, useState } from "react";

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

export const useWindowSizeCustom = () => {
  // 초기 state 값은 undefined로 세팅한다.
  const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          // 현재 브라우저의 가로, 세로 길이로 셋팅
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
      window.addEventListener("resize", handleResize);

      // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
      handleResize();

      // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행
  return windowSize;
};

export default useWindowSizeCustom;
