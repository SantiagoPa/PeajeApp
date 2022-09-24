import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import PeajeApp from "./PeajeApp";
import { store } from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PeajeApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
