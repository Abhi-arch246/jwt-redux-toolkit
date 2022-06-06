import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Navbar() {
    const [showlinks, setshowlinks] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const submitLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <div className="navbar-style">

            <div className="leftside">

                {user ? (
                    <Link className='brand' to="/dashboard">Epic Auth</Link>

                ) : (
                    <Link className='brand' to="/">Epic Auth</Link>

                )}
            </div>

            <div className="rightside">
                <ul>
                    {user ? (
                        <li id={showlinks ? '' : 'hidden'}>
                            <button className='btn btn-danger' onClick={submitLogout}>Logout</button>
                        </li>
                    ) : (
                        <>
                            <li id={showlinks ? 'hidden' : ''}>
                                <NavLink className="link" to="/login">Login</NavLink>
                            </li>
                            <li >
                                <NavLink className="link" to="/register">Register</NavLink>
                            </li>
                        </>
                    )}

                </ul>

            </div>

            <button onClick={() => setshowlinks(!showlinks)} className='hamburger'>
                <span></span>
                <span></span>
                <span></span>
            </button>


        </div>

    )
}

export default Navbar