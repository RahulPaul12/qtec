import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/App.css";
import "./style/custom.css"
import MainLayout from "./App";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
