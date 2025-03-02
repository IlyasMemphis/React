import { createStore } from "redux"
import userReducer from "../redux/reducers"

const store = createStore(userReducer)
export default store;