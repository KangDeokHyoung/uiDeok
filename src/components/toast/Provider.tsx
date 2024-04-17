import React, { useState } from "react";
import { N_Toast } from "type/toast";
import { Context } from "./Toast";

const Provider = (props: N_Toast.Props) => {
  const [alert, setAlert] = useState<N_Toast.Alert[]>([]);

  const set = (payload: N_Toast.Provider.Payload) => {
    const { text, status, className } = payload;
    setAlert([...alert, { text, status, id: new Date().getTime(), className }]);
  };
  const remove = (id: number) => setAlert((prev) => prev.filter((item) => item.id !== id));
  const clear = () => setAlert([]);

  return <Context.Provider value={{ alert, set, remove, clear }}>{props.children}</Context.Provider>;
};

export default Provider;
