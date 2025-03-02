import React from "react";
import { Provider } from "react-redux";
import store from './redux/store'
import User from './User'
import UserForm from "./UserForm";

const App = () => ( 
    <Provider store={store}>
        <div>
            <h1>User Profile</h1>
            <User /> 
            <UserForm />
        </div>
    </Provider>
)

export default App;