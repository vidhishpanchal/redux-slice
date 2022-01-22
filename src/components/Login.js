import React, { useState } from 'react'
import { login } from "../features/userSlice"
import { useDispatch } from 'react-redux'
import "./login.css"

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedin: true
        }))

    }
    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <h1>Login Here</h1>
                <input type="name" value={name} placeholder="name" onChange={(e) => { setName(e.target.value); console.log(name) }} />
                <input type="email" value={email} placeholder="email" onChange={(e) => { setEmail(e.target.value); console.log(email) }} />
                <input type="password" value={password} placeholder="password" onChange={(e) => { setPassword(e.target.value); console.log(password) }} />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default Login
