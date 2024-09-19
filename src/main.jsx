import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Routes } from "./Routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
);
