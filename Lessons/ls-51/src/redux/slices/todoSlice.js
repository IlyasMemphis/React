const initialState = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: { // Reducers - функции для изменения состояния 
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) { 
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload) 
    }
})


export const { addTodo, toggleTodo, deleteTodo } = todoSlice.action;
export default todoSlice.reducer;