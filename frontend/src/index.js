import React from "react";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import store from "./state/store";
import App from "./app/app";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store} >
        <App />
    </Provider>
)