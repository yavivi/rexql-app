import React from "react";
import ReactDOM from "react-dom";
import { AppContextProvider } from "./context/appContext";
import App from "./App";


ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,

  document.getElementById("root")
);
