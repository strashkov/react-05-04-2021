import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import initStore from "./utils/store";
// import Router from "./components/Router.jsx";
import Router from "./containers/Router.js";

ReactDom.render(
  <Provider store={initStore()}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
