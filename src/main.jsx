import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
