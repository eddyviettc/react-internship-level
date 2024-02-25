import { useEffect, useState } from "react"
import { loginApi } from "../services/UserService"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [loadingApi, setLoadingApi] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            navigate("/");

        }
    }, [])

    useNavigate(() => {
        let token = localStorage.getItem("token")
    }, [])

    const handleLogIn = async () => {
        if (!email || !password) {
            toast.error('Email/Password is require !')
            return
        }
        setLoadingApi(true)
        let res = await loginApi(email, password)
        if (res && res.token) {

            localStorage.setItem("token", res.token)
            navigate("/");


        } else {
            if (res && res.status === 400) {
                toast.error(res.data.error)
            }
        } setLoadingApi(false)

    }

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Log in</div>
                <div className="text"> Email or Username (eve.holt@reqres.in)</div>
                <input
                    type="text"
                    placeholder="Email or Username"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}

                />
                <div className="input-password">
                    <input
                        type={isShowPassword === true ? "password" : "text"}
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <i
                        className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                        onClick={() => setIsShowPassword(!isShowPassword)}

                    ></i>

                </div>

                <button
                    className={email && password ? "active" : ""}
                    disabled={email && password ? false : true}
                    onClick={() => handleLogIn()}>
                    {loadingApi && <i className="fa-solid fa-sync fa-spin"></i>}
                    &nbsp;Login
                </button>
                <div className="back">
                    <i class="fa-solid fa-chevron-left mx-1">
                    </i>
                    Go back
                </div>

            </div>
        </>
    )
}

export default Login