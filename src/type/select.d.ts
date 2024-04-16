import React from "react";

export declare namespace N_Select {
  type Props = {
    className?: string;
    gap?: number;
    children: JSX.Element[];
    st?: React.CSSProperties;
    disabled?: boolean;
    id?: string;
  };
  type Selected<T> = { title: string; value: T; id?: string } | null;

  type Summay = {
    className?: string;
    placeholder?: string;
    children?: JSX.Element;
  };
  type Option = {
    children: JSX.Element[];
  };
  type Item = {
    title: string;
    value: unknown;
    id?: string;
    disabled?: boolean;
  };
}
