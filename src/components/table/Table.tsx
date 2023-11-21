import classNames from "classnames";
import { Order } from "common/icons/Icons";
import { keys, values } from "lodash";
import React, { Dispatch, createContext, useContext, useEffect, useState } from "react";
import { N_Table } from "type/Table";

interface Context {
  header: N_Table.Header[];
  setHeader: Dispatch<N_Table.Header[]>;
  order?: N_Table.Order;
}
export const TableContext = createContext<Context>({ header: [], setHeader() {}, order: undefined });

const align = (column: N_Table.Head.Data) => {
  let align: React.CSSProperties = {};
  if (column.align === "right") align = { justifyContent: "flex-end" };
  if (column.align === "center") align = { justifyContent: "center" };
  return align;
};

export function Table(props: N_Table.Props) {
  const { children, className, id, order, st } = props;
  const [header, setHeader] = useState<N_Table.Header[]>([]);

  return (
    <TableContext.Provider value={{ header, setHeader, order }}>
      <div id={classNames("ui-table", { id })} className={className} style={{ ...st }}>
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Head(props: { data: N_Table.Header[] }) {
  const { setHeader, order } = useContext(TableContext);

  useEffect(() => {
    setHeader(props.data);
  }, [props.data, setHeader]);

  const orderHandler = (thKey: string) => {
    if (order) {
      const [key, value] = Object.entries(order.sort)[0];
      const resultValue = thKey !== key ? value : value === "asc" ? "desc" : "asc";
      order.onChange({ [thKey]: resultValue });
    }
  };

  const isOrderDesc = order && values(order.sort)[0] === "desc";
  const keyHandler = () => {
    if (order) return keys(order.sort)[0];
  };

  return (
    <div className="table-head">
      {props.data.map((el, i) => {
        return (
          <div
            className={classNames("th", { isOrder: el.order })}
            key={el.property}
            style={{ justifyContent: el.align }}
            onClick={() => {
              if (el.order) orderHandler(el.property);
            }}
          >
            <div>{el.title}</div>
            {el.order && (
              <Order className={classNames({ order: !isOrderDesc, active: keyHandler() === el.property })} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Body<T>(props: N_Table.Body.Props<T>) {
  const { children, data } = props;
  return (
    <div className="table-body">
      {data.map((el, index) => {
        return <React.Fragment key={index}>{children && children({ index, rowData: el })}</React.Fragment>;
      })}
    </div>
  );
}

function Row(props: N_Table.Row.Props) {
  const { children } = props;
  return <div className="table-body-row">{children}</div>;
}

function Tr<T>(props: N_Table.Tr.Props<T>) {
  const { children, data } = props;
  const { header } = useContext(TableContext);

  return (
    <div className="table-tr">
      <>
        {header
          .filter((f) => !f.hidden)
          .map((el, i) => {
            if (!data) return <></>;
            const value = data[el.property as keyof T];
            return (
              <Td key={`${i}${el.property}`} column={el} value={value}>
                <>{children ? children({ value, property: el.property }) : value ?? "-"}</>
              </Td>
            );
          })}
      </>
    </div>
  );
}

function Td<T>(props: N_Table.Td.Props<T>) {
  const { column, children } = props;
  return (
    <div className="table-td">
      <div style={align(column)}>{children}</div>
    </div>
  );
}

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Tr = Tr;
