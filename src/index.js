import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TaskProvider } from "./contexts/TaskContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
