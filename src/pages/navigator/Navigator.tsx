import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navigator.scss";

interface I_NavigatorProps {}

const Navigator: React.FC<I_NavigatorProps> = (props) => {
  return (
    <nav>
      <NavLink to="/components/button">Button</NavLink>
      <NavLink to="/components/input">Input</NavLink>
      <NavLink to="/components/dialog">Dialog</NavLink>
      <NavLink to="/components/checkbox">Checkbox</NavLink>
      <NavLink to="/components/radio">Radio</NavLink>
      <NavLink to="/components/switch">Switch</NavLink>
      <NavLink to="/components/accordion">Accordion</NavLink>
      <NavLink to="/components/popover">Popover</NavLink>
      <NavLink to="/components/textarea">Textarea</NavLink>
      <NavLink to="/components/table">Table</NavLink>
      <NavLink to="/components/tooltip">Tooltip</NavLink>
      <NavLink to="/components/select">Select</NavLink>
      <NavLink to="/components/toast">Toast</NavLink>
    </nav>
  );
};

export default Navigator;
