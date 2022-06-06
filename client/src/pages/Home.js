import React from 'react'
import auth from '../auth.png'
function Home() {
    return (
        <div className="container mt-5">

            <div className='row mx-2'>
                <div className="col-md-6">
                    <img src={auth} className="img-class" alt="" />
                </div>
                <div className="col-md-6 py-2">
                    <h1>Test Website for JWT Auth</h1>
                    <br />

                    <h4>What Is JWT?</h4>
                    <br />
                    <h5>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</h5>
                    <br />
                    <h5>JSON web token (JWT), pronounced "jot", is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. Again, JWT is a standard, meaning that all JWTs are tokens, but not all tokens are JWTs.</h5>
                    <br />
                    <h5>Because of its relatively small size, a JWT can be sent through a URL, through a POST parameter, or inside an HTTP header, and it is transmitted quickly. A JWT contains all the required information about an entity to avoid querying a database more than once. The recipient of a JWT also does not need to call a server to validate the token.</h5>
                </div>
            </div>
        </div>

    )
}

export default Home