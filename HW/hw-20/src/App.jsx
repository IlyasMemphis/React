// App.js
import React from 'react';
import UserList from './UserList'; // Импортируем компонент UserList

function App() {
  return (
    <div>
      <h1>Список пользователей</h1>
      <UserList /> {/* Добавляем компонент UserList */}
    </div>
  );
}

export default App;
