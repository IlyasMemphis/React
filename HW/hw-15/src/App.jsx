import React, { useState, useCallback, useMemo } from 'react';
import UserList from './UserList';

const userList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
];

const App = () => {
    const [filter, setFilter] = useState('');

    const filterUsers = useCallback((text) => {
        return userList.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
    }, []);

    const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

    return (
        <div>
            <h1>User List</h1>
            <input
                type="text"
                placeholder="Filter users"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <UserList users={filteredUsers} />
        </div>
    );
};

export default App;