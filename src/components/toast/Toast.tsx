import React, { useEffect, useRef, createContext, useContext } from "react";
import Portal from "./portal/Portal";
import { CSSTransition } from "react-transition-group";
import { N_Toast } from "type/toast";
import Provider from "./Provider";

export const Context = createContext<N_Toast.Context>({
  alert: [],
  set() { /* prettier-ignore */ },
  remove() { /* prettier-ignore */ },
  clear() { /* prettier-ignore */ },
});
export const AlertContext = () => useContext(Context);

function Toast(props: N_Toast.Props) {
  const { children, transition } = props;
  const { alert, clear } = useContext(Context);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (alert.length) clear();
  }, []);

  return (
    <div id="popover">
      <CSSTransition in={!!alert.length} mountOnEnter unmountOnExit timeout={transition ? 300 : 0}>
        <Portal {...props} anchor={children ? ref.current : null} />
      </CSSTransition>
    </div>
  );
}

Toast.Provider = Provider;
Toast.Consumer = Context.Consumer;
Toast.Context = AlertContext;

export default Toast;
