import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App'; // Mengimpor komponen App kita

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Merender komponen App */}
  </React.StrictMode>
);