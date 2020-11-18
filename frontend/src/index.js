import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider} from 'react-intl'
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <IntlProvider>
    <App />
    </IntlProvider>,
  </BrowserRouter>,
  document.getElementById("root")
);
