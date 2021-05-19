import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalFontStyles from "./utilities/GlobalStyles";

const title = "test";

ReactDOM.render(
  <React.StrictMode>
    <GlobalFontStyles />
    <App title={title} />
  </React.StrictMode>,
  document.getElementById("app")
);

module.hot.accept();
