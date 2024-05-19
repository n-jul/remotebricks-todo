import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./components/Employees.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
