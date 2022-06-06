import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers, reset } from '../features/auth/authSlice'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, users } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
        dispatch(getAllUsers())
        console.log(users);

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, dispatch])




    return (
        <div className='container'>
            <div className="justify-content-center">
                <div className="row mt-4">
                    <div className="col-md-8 mt-5 mx-auto shadow-lg">
                        <div className='p-5 rounded'>
                            <h1 className='py-4'>Dashboard</h1>
                            <h2>Welcome <span className="text-style">{user.name}</span></h2>
                            <h2>Your email is <span className='text-style'>{user.email}</span> </h2>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <lottie-player
                            src="https://assets10.lottiefiles.com/packages/lf20_xyadoh9h.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>

                </div>
                <div className="row m-3">
                    <div className="col-md-8 table-responsive">
                        <table className='table table-hover table-stripped'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th scope='col'>User ID</th>
                                    <th scope='col'>User Name</th>
                                    <th scope='col'>User Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 ? (
                                        users.map(user => {
                                            return <tr key={user._id}>
                                                <td>{user._id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        })
                                    ) : (
                                        <h1 className='text-center'>No Users yet</h1>
                                    )
                                    /* {users && (
                                    users.map(user => {
                                        return <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.name}/-</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                )} */}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard