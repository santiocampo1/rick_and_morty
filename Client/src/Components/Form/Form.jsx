import { useState } from "react"
import validation from "../Validation/Validation"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})


    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} placeholder="sanntiocampo@gmail.com" />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="fullstack1" />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            <hr />
            <button disabled={!userData.email || !userData.password || errors.email || errors.password}>Log In</button>

        </form >
    )
}


export default Form