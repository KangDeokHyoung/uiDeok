import React from "react";
import { BrowserRouter } from "react-router-dom";
import "common/scss/reset.scss";
import { Router } from "router/router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
