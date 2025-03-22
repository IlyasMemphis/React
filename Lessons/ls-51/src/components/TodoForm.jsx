import { useState } from "react"
import todoSlice, { addTodo } from "../redux/slices/todoSlice"

export default function TodoForm() {
const [text, setText] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
        addTodo({
            id: Date.now(),
            text: text,
            completed: false
        })
    }
}
    return (
        <form>
            <input 
            type="text"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter new todo"/>
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}