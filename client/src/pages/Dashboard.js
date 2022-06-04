import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Dashboard() {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])

    return (
        <div className='container'>
            <div className="justify-content-center">
                <div className="row mt-4">
                    <div className="col-md-6 mx-auto shadow-lg">
                        <div className='p-5 rounded'>
                            <h1 className='py-4'>Dashboard</h1>
                            <h2>Welcome {user.name}</h2>
                            <h2>Your email is {user.email}</h2>
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

            </div>

        </div>
    )
}

export default Dashboard