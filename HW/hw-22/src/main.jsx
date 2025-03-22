// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Используем 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
