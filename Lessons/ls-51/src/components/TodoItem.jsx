import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice"

export default function TodoItem({ todo }) {
    const dispatch = useDispatch()
    
    return ( 
        <li>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
            </button>
        </li>
    )
}