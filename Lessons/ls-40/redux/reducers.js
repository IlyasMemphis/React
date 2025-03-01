import { ADD_TASK, MOVE_TASK, UPDATE_TASK } from "./action";

const initialState = { 
    tasks: [
        { id: 1, text: "Разобраться с redux", status: "Todo"},
        { id: 2, text: "Изучить MUI", status: "IsnProgress"},
        { id: 3, text: "Оптимизировать приложение", status: "Done"}
    ]
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: 
            return { 
                ...state, 
                task : [...state.tasks, action.payload]
        }
        case MOVE_TASK: 
        return {
            ...state,
            task: state.tasks.map((task) => 
                task.id === action.payload.taskId ? {...task, status: action.payload.taskstatus} : task 
        ), 
        }
        case UPDATE_TASK: 
            return { 
                ...state, 
                task: state.map((task) => 
                    task.id === action.payload.taskId ? {...task, status: action.payload.taskstatus} : task 
        ), 
            }
    }
}