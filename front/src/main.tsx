import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ModalContextProvider from "./context/ModalContext.tsx";
import LanguageContextProvider from "./context/LanguageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
      </LanguageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
