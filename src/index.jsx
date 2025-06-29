import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import App from "./app.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);