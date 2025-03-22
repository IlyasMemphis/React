import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todos)
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}