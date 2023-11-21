import React, { Dispatch } from "react";
import { N_CheckBox } from "lib/@types";

export declare namespace N_Table {
  type Sort = Record<string, "desc" | "asc">;
  type Order = {
    sort: Sort;
    onChange: (sort: Sort) => void;
  };

  type Header = {
    title: string;
    property: string;
    order?: boolean;
    toolTip?: boolean;
    align?: string;
    width?: number;
    flex?: number;
    hidden?: boolean;
  };

  interface Context {
    state: { header: Header[]; windowSize: number };
    setState: Dispatch<Actions>;
    resize?: boolean;
    order?: Order;
  }

  interface State {
    header: Header[];
    windowSize: number;
  }

  type Actions = { type: "header"; payload: Header[] } | { type: "windowSize"; payload: number };

  // ===================== Table ========================
  type Props = {
    loading?: boolean;
    loadingIcon?: JSX.Element;
    id?: string;
    className?: string;
    children: React.ReactNode;
    resize?: boolean;
    order?: Order;
    st?: React.CSSProperties;
  };

  // ===================== HEAD ========================
  namespace Head {
    interface Data {
      title: string;
      property: string;
      order?: boolean;
      toolTip?: boolean;
      align?: string;
      width?: number;
      flex?: number;
      hidden?: boolean;
    }

    type Props = {
      data: Data[];
      order?: Order;
      children?: (payload: { column: Header }) => JSX.Element | string;
      checkbox?: N_CheckBox.Props;
      orderIcon?: JSX.Element;
    };
  }

  // ===================== TH ========================
  namespace Th {
    type Props = {
      children: JSX.Element | string;
      column: Header;
      index: number; // hidden 숨기기전 원래 index
      isLast: boolean;
      orderIcon?: JSX.Element;
    };

    namespace Order {
      type Props = { property: string; order?: Order; orderIcon?: JSX.Element };
    }
  }

  // ===================== BODY ========================
  namespace Body {
    type Props<T> = {
      data: T[];
      children?: (payload: { rowData: T; index: number }) => React.ReactNode;
    };
  }

  // ===================== TD ========================
  namespace Td {
    type Props<T> = {
      column: Header;
      value: T;
      children: React.ReactNode;
    };
  }

  namespace Row {
    type Props = {
      className?: string;
      children: JSX.Element;
      st?: React.CSSProperties;
    } & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  }

  namespace Tr {
    type Props<T> = {
      className?: string;
      checkbox?: N_CheckBox.Props;
      data: T;
      st?: React.CSSProperties;
      children?: (payload: { property: string; value: T[keyof T] }) => React.ReactNode;
    };
  }
}
