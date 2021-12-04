import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  WebHeader,
  WebFooter,
  Home,
  Episodes,
} from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Science LIVE with Roger Billings</title>
      <script type="text/javascript" src="/jquery.min.js?ver=3.6.0"></script>
      <script type='text/javascript' src='/jquery-migrate.min.js?ver=3.3.2'></script>
      <link rel="stylesheet" type="text/css" href="/magnific-popup.css"></link>
      <script type="text/javascript" src="/jquery.magnific-popup.js"></script>
    </Helmet>
    <WebHeader />

    <div className="flex-auto overflow-auto justify-center items-center">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes.phtml" element={<Episodes />} />
      </Routes>
    </Router>
    </div>

    <WebFooter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
