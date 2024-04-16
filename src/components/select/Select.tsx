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
  onChange?: (select: N_Select.Selected<T>) => void;
  disabled?: boolean;
};

export const context = createContext<CONTEXT<any> | null>(null);
export type MapSelected<T> = Map<string, { title: string; value: T; id?: string }>;

export function Select<T>(
  props: N_Select.Props & {
    onChange?: (select: N_Select.Selected<T>) => void;
    selected?: N_Select.Selected<T>;
  }
) {
  const { children, gap = 8, onChange } = props;
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState<MapSelected<T>>(new Map(null));

  useEffect(() => {
    if (props.selected) setSelected(new Map([[props.selected?.title ?? "", props.selected]]));
  }, [props.selected]);

  return (
    <div id="select">
      <context.Provider value={{ toggle, setToggle, setSelected, selected, onChange, disabled: props.disabled }}>
        <Popover
          gap={gap}
          disabled={props.disabled}
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
  const { toggle, selected, disabled } = useSelect();
  const label = selected && selected.size ? [...selected.values()].map((el) => el.title) : value;

  // console.log(props.disabled);

  return (
    <div className={classNames("select-summary", { active: toggle, disabled })}>
      <div>{label}</div>
      <Arrow className={classNames("select-summary-arrow", { active: toggle })} />
    </div>
  );
}

function Option(props: N_Select.Option) {
  const { children } = props;
  return <div className="select-option">{children}</div>;
}

function Item(props: N_Select.Item) {
  const { title, value = "", id = title, disabled } = props;
  const { setSelected: _setSelected, setToggle, onChange } = useSelect();

  const onClickHandler = () => {
    if (disabled) return;
    if (onChange) onChange({ title, value, id });
    if (_setSelected) _setSelected(new Map([[id, { title, value, id }]]));
    if (setToggle) setToggle(false);
  };

  return (
    <div className={classNames("select-item", { disabled })} onClick={onClickHandler}>
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
