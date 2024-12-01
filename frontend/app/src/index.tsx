import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css';
import ConvApp from './pages/ConvApp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:conv_id" element={<ConvApp />} />
        <Route path="/:conv_id/current" element={<ConvCurrent />} />
        <Route path="/:conv_id/:stage_id" element={<ConvStage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/edit" element={<AdminEdit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
