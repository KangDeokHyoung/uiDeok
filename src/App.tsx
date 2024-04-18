import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "router/router";
import "common/scss/reset.scss";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router />
    </BrowserRouter>
  );
}

export default App;
