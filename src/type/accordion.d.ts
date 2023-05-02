import React, { Dispatch } from "react";

export declare namespace T_Accordion {
  type Props = {
    st?: React.CSSProperties;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    transition?: boolean;
    toggle?: boolean;
    expanded?: boolean;
    setExpanded?: Dispatch<expanded>;
    onChange?: (payload: boolean) => void;
  };

  type Summay = {
    st?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
  };
}
