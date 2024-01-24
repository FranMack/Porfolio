import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ModalContextProvider from "./context/ModalContext.tsx";
import RenderContextProvider from "./context/RenderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <RenderContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
      </RenderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
