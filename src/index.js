import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

// Provider로 연결
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root"))
;