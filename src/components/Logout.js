import React from 'react'
import "./logout.css"
import { logout, selectUser } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const LogoutUser = (e) => {
        e.preventDefault()
        dispatch(logout())
        console.log("Hello logout");
    }
    return (
        <div>
            <h1>Welcome <span className="user__name">{user.name}</span></h1>
            <button className="logout__button" onClick={(e) => LogoutUser(e)}>Logout</button>
        </div>
    )
}

export default Logout
