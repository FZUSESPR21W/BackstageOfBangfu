import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@/assets/style/theme.less";
import store from "./modules";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
