import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

// Nextの場合は root コンポーネントは一つだが、Reactをパーツで利用する場合は root コンポーネントを複数所持している
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
