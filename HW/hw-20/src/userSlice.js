// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние для пользователей
const initialState = {
  users: [
    { id: 1, name: 'Иван Иванов', email: 'ivan@mail.com' },
    { id: 2, name: 'Мария Петрова', email: 'maria@mail.com' },
    { id: 3, name: 'Петр Сидоров', email: 'petr@mail.com' },
  ],
};

// Создаем срез состояния для пользователей
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

// Экспортируем редюсер по умолчанию
export default userSlice.reducer;
