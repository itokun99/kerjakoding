import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { MainApp } from "@apps";
import { setupStyle } from "@libs";

const el = document.getElementById("root");

if (el) {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>,
  );
  setupStyle();
}
