import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import AppProvider from "./app/AppProvider";
import StateProvider from "./features/store/Provider/state-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </AppProvider>
  </StrictMode>
);
