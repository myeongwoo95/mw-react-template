import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import HttpClient from "./utils/http";

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App httpClient={httpClient} />
    </BrowserRouter>
  </React.StrictMode>,
  root
);
