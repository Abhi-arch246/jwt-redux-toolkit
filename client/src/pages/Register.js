import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { register, reset } from '../features/auth/authSlice'
function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/dashboard')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])


    const registersubmit = (e) => {
        e.preventDefault()
        if (password !== cpassword) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData))
        }
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
                <h1>Register</h1>
                <div className="col-md-6 card mx-auto mt-5">
                    <form onSubmit={registersubmit} className=' mt-5 mx-4' style={{ textAlign: "left" }}>
                        <div className="form-group">
                            <h5>Name</h5>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Enter name" required autoFocus />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Email address</h5>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" required placeholder="Enter email" />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Password</h5>
                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" required placeholder="Password" />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Confirm Password</h5>
                            <input type="password" value={cpassword} onChange={(e) => setcpassword(e.target.value)} className="form-control" required placeholder="Confirm Password" />
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

export default Register