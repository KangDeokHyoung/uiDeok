import * as React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "common/hooks/selector";
import { reSizeActions } from "store/actions/mypage";
import "./Navigator.scss";

interface I_NavigatorProps {}

const Navigator: React.FC<I_NavigatorProps> = (props) => {
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state) => state.resize);
  const closeHandler = () => {
    if (isMobile) dispatch(reSizeActions.setMobileToggle(false));
  };

  const naviList = [
    "Button",
    "Input",
    "Dialog",
    "Checkbox",
    "Radio",
    "Switch",
    "Accordion",
    "Popover",
    "Textarea",
    "Table",
    "Tooltip",
    "Select",
    "Toast",
  ];

  return (
    <nav>
      {naviList.map((item, i) => {
        return (
          <NavLink to={`/components/${item.toLowerCase()}`} onClick={closeHandler} key={i}>
            {item}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigator;
