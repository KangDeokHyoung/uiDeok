import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navigator.scss";

interface I_NavigatorProps {}

const Navigator: React.FC<I_NavigatorProps> = (props) => {
  return (
    <nav>
      <NavLink to="/components/button">Button1</NavLink>
    </nav>
  );
};

export default Navigator;
