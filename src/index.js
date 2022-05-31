// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {ContextProvider} from "./context/Context"
import HighlightVideo from './components/HighlightVideo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ContextProvider>
      {/* <App/> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="HighlightVideo" element={<HighlightVideo />} />

      </Routes>

    </Router>
    </ContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();