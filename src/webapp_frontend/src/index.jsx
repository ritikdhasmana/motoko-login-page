import * as React from "react";
// import {ReactDOM }from "react-dom";
import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client';
import App from "./App";
const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
  </React.StrictMode>
  );
