import React from "react";
import ReactDOM from "react-dom/client"; // 변경된 부분
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

// React 18 기준 createRoot 사용
const root = ReactDOM.createRoot(document.getElementById("root")); // 변경된 부분
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
