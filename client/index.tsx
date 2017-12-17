import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./component/App";
import { store } from "./store";

import "./styles.scss";

ReactDOM.render(
    <App store={store} />,
    document.getElementById("app")
);
