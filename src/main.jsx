import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes.jsx";
import GlobalStyle from "./styles/globalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </StrictMode>
);
