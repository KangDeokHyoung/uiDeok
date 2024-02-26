import React, { Dispatch, createContext, useEffect, useState } from "react";
import classNames from "classnames";
import { Arrow } from "common/icons/Icons";
import { Popover } from "components/popover/Popover";
import { N_Select } from "type/select";

type CONTEXT<T> = {
  toggle: boolean;
  setToggle: Dispatch<boolean>;
  setSelected: Dispatch<MapSelected<T>>;
  selected: MapSelected<T>;
};

export const context = createContext<CONTEXT<any> | null>(null);

export type MapSelected<T> = Map<string, { title: string; value: T; id?: string }>;

export function Select<T>(
  props: N_Select.Props & {
    onChange?: (select: MapSelected<T> | null) => void;
    selected?: MapSelected<T> | null;
  }
) {
  const { children, gap = 8, selected: propsSelected, onChange: propsOnchange } = props;
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState<MapSelected<T>>(new Map(null));

  useEffect(() => {
    if (propsOnchange) propsOnchange(selected);
  }, [propsOnchange, propsSelected, selected]);

  return (
    <div id="select">
      <context.Provider value={{ toggle, setToggle, setSelected, selected }}>
        <Popover
          gap={gap}
          className="select-popover"
          open={toggle}
          onChange={setToggle}
          clickOutSide
          clickInSide
          content={() => <>{children[1]}</>}
        >
          <>{children[0]}</>
        </Popover>
      </context.Provider>
    </div>
  );
}

function Summary(props: N_Select.Summay) {
  const { placeholder, children } = props;
  const value = children ? children : placeholder;
  const { toggle, selected } = useSelect();
  return (
    <div className={classNames("select-summary", { active: toggle })}>
      <div>{selected?.title ? selected?.title : value}</div>
      <Arrow className={classNames("select-summary-arrow", { active: toggle })} />
    </div>
  );
}

function Option(props: N_Select.Option) {
  const { children } = props;
  return <div className="select-option">{children}</div>;
}

function Item(props: N_Select.Item) {
  const { title, value = "" } = props;
  const { setSelected, selected, setToggle } = useSelect();

  const onClickHandler = () => {
    if (setSelected) setSelected({ title, value, id: title });
    if (setToggle) setToggle(false);
  };

  return (
    <div className={classNames("select-item", { selected: selected?.value === value })} onClick={onClickHandler}>
      {title}
    </div>
  );
}

Select.Summay = Summary;
Select.Option = Option;
Select.Item = Item;

export const useSelect = () => {
  const select = React.useContext(context);
  if (!context) throw new Error("저장소가 존재하지 않습니다.");
  return { ...select };
};
