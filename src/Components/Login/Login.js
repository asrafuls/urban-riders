import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import logo from "./../../Logo/logo_1.png"

const Login = () => {

    const { user, signOut } = useAuth()

    const [loginForm, setLoginForm] = useState(true)

    console.log(user)

    return (
        <div className="loginComp">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mt-5" style={{ margin: "0 auto" }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <h2 className="mb-5 text-center text-dark">
                                <img src={logo} alt="" className="w-50" />
                            </h2>
                        </Link>
                        {
                            user ?
                                <div className="text-center mt-5">
                                    <h3>You Are Already Signed In</h3>
                                    <button className="btn btn-outline-danger px-4 mt-3" onClick={signOut}>Sign Out</button>
                                </div>
                                :
                                <>
                                    {
                                        loginForm ?
                                            <SignIn form={setLoginForm} />
                                            :
                                            <SignUp form={setLoginForm} />
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;