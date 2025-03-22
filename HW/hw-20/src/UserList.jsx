// UserList.js
import React from 'react';
import { useSelector } from 'react-redux'; // Импортируем хук useSelector
import { List } from 'antd'; // Импортируем компонент List из Ant Design

const UserList = () => {
  // Извлекаем массив пользователей из хранилища Redux
  const users = useSelector((state) => state.users.users);

  return (
    <List
      bordered
      dataSource={users}
      renderItem={(user) => (
        <List.Item key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </List.Item>
      )}
    />
  );
};

export default UserList;
