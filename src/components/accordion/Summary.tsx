import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";
import { T_Accordion } from "type";
import classNames from "classnames";

export const Summary = (props: T_Accordion.Summay) => {
  const { st, children, className = "" } = props;
  const { expanded, onChange, setExpanded, toggle, disabled } = useContext(AccordionContext);

  const onClickHandler = () => {
    if (onChange) onChange(!expanded);
  };

  return (
    <div style={st} onClick={onClickHandler} className={classNames("accordion_summary", { [className]: className })}>
      {children}
    </div>
  );
};
