import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo} from "./redux/actions";

const UserForm = ({ setUserInfo }) => { 
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setUserInfo(name, status);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)}/>
            <button type="submit">Save</button>
        </form>
    )
}

export default connect(null, { setUserInfo })(UserForm)