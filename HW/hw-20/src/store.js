// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Импортируем редюсер пользователей

const store = configureStore({
  reducer: {
    users: userReducer, // Добавляем редюсер для пользователей в хранилище
  },
});

export default store;
