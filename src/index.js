// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./pages/Home"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ContextProvider} from "./context/Context"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/england" element={<App />} />
          <Route path="/spain" element={<App />} />
          <Route path="/italy" element={<App />} />
          <Route path="/france" element={<App />} />
          <Route path="/germany" element={<App />} />
          <Route path="/international" element={<App />} />

          {/* <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
