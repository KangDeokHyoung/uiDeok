import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";
import { T_Accordion } from "type";
import classNames from "classnames";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function Summary(props: T_Accordion.Summay) {
  const { st, children, className = "" } = props;
  const { expanded, onChange, setExpanded, toggle, disabled } = useContext(AccordionContext);

  const onClickHandler = () => {
    if (disabled) return;
    const onClick = onChange ?? setExpanded;
    const check = expanded ? expanded : false;
    if (onClick) onClick(!check);
  };

  console.log({ expanded, toggle });

  return (
    <div style={st} onClick={onClickHandler} className={classNames("accordion_summary", { [className]: className })}>
      <div>{children}</div>
      <div className="icon-arrow">
        <IoIosArrowDown />
        <IoIosArrowUp />
      </div>
    </div>
  );
}
