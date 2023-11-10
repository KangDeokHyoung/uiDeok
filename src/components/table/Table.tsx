import React, { createContext } from "react";

interface Props {}

export function Table() {
  const context = createContext("");
  return <div id="table"></div>;
}

type HEAD = {};
function Head(props: HEAD) {
  return "";
}

type BODY = {};
function Body(props: BODY) {
  return "";
}
