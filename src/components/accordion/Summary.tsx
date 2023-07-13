import React from "react";
import { AccordionContext } from "./Accordion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { T_Accordion } from "type";
import classNames from "classnames";

export function Summary(props: T_Accordion.Summay) {
  return (
    <AccordionContext.Consumer>
      {(value) => <SummryComp {...value} children={props.children} />}
    </AccordionContext.Consumer>
  );
}

export const SummryComp = (props: T_Accordion.Props) => {
  const { children, st, className = "", disabled, setExpanded, onChange, expanded } = props;

  const onClickHandler = () => {
    if (disabled) return;
    const onClick = onChange ?? setExpanded;
    const check = expanded ? expanded : false;
    if (onClick) onClick(!check);
  };

  return (
    <div style={st} onClick={onClickHandler} className={classNames("accordion_summary", { [className]: className })}>
      <div className="summary-title">{children}</div>
      <div className="icon-arrow">{expanded ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
    </div>
  );
};
