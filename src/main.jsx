import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Router from "./routes/routes.jsx";
import GlobalStyle from "./styles/globalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
      >
      <Router />
    </HashRouter>
    <GlobalStyle />
  </StrictMode>
);
