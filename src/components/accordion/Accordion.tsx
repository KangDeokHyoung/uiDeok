import classNames from "classnames";
import React, { useState, createContext } from "react";
import { T_Accordion } from "type";

export const AccordionContext = createContext<T_Accordion.Props>({
  disabled: false,
  expanded: false,
  toggle: false,
  setExpanded: (payload: boolean) => {},
  onChange: (payload: boolean) => {},
});

export const Accordion = (props: T_Accordion.Props) => {
  const { st, transition = true, disabled = false, className = "", toggle = false, children, onChange } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <AccordionContext.Provider
      value={{
        expanded,
        setExpanded,
        disabled,
        toggle,
        onChange,
      }}
    >
      <div style={st} className={classNames("ui_accordion", { [className]: className, expanded, disabled })}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
