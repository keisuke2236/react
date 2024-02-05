import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// 章ごとにAppを切り替え
import App from "./3-4/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
