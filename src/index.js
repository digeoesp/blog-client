import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </Router>,

  document.getElementById("root")
);