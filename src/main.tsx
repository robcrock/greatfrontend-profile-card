import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <div className="w-full min-h-screen flex items-start justify-center pt-[200px]">
      <App />
    </div>
  </StrictMode>
);
