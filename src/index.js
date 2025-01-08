import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider theme={{ hashed: false }}>
    <App />
  </ConfigProvider>
);
