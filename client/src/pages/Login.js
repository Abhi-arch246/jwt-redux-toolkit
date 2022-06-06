import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error("Your credentials doesn't match")
        }
        if (isSuccess) {
            toast.success("Login successful")

            navigate('/dashboard')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])


    const loginsubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    if (isLoading) {
        return <div className='col-md-4 mx-auto'>

            <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_x62chJ.json"
                background="transparent"
                speed="1"
                loop
                autoplay
            ></lottie-player>
        </div>
    }

    return (
        <div className="container">

            <div className='text-center mt-5'>
                <h1>Login</h1>
                <div className="col-md-6 card mx-auto mt-5">
                    <form onSubmit={loginsubmit} className=' mt-5 mx-4' style={{ textAlign: "left" }}>
                        <div className="form-group">
                            <h5>Email address</h5>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" required placeholder="Enter email" autoFocus />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Password</h5>
                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" required placeholder="Password" />
                        </div>
                        <div className="text-center">

                            <button type="submit" className="submit-btn my-5">Submit</button>
                            <br />
                        </div>


                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login