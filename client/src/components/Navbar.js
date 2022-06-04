import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const submitLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <>
            <nav>
                <div className="container-nav">
                    {user ? (
                        <Link className='brand' to="/dashboard">Epic Auth</Link>

                    ) : (
                        <Link className='brand' to="/">Epic Auth</Link>

                    )}

                    <div className="menu">
                        <ul>
                            {user ? (
                                <li>
                                    <button className='btn btn-danger' onClick={submitLogout}>Logout</button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink className="link" to="/login">Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="link" to="/register">Register</NavLink>
                                    </li>
                                </>
                            )}

                        </ul>

                    </div>

                    <button className='hamburger'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

            </nav>
        </>
    )
}

export default Navbar