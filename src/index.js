// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем из react-dom/client
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем корневой элемент
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
