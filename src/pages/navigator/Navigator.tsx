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
    </nav>
  );
};

export default Navigator;
