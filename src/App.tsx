import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "router/router";
import store from "store/configStore";
import { Provider } from "react-redux";
import "common/scss/reset.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
