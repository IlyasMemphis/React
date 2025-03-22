// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Импортируем Provider из react-redux
import App from './App'; // Импортируем компонент App
import store from './store'; // Импортируем хранилище Redux

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем корневой элемент для React

root.render(
  <Provider store={store}> {/* Оборачиваем компонент App в Provider и передаем store */}
    <App />
  </Provider>
);
