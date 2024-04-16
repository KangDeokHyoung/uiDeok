import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/components/button");
  });
  return <div></div>;
};

export default Main;
