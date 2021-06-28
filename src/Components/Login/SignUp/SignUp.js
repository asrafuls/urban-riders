import React, { useState } from 'react';
import { useAuth } from '../auth';

const SignUp = ({ form }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()

    const {user, pwdSignUp} = useAuth()

    const signUpWithPwd = (e) => {
        pwdSignUp(name, email, password)
        e.target.reset()
        e.preventDefault()
    }

    return (
        <div className="card">
            <form className="card-body" onSubmit={signUpWithPwd}>
                <h4 className="text-center mt-2 mb-4">Create Account</h4>
                <div class="mb-3">
                    <label for="formName" class="form-label">Full Name</label>
                    <input onChange={(e) => setName(e.target.value)} type="name" class="form-control form-control-sm" id="formName" placeholder="" />
                </div>
                <div class="mb-3">
                    <label for="formEmail" class="form-label">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control form-control-sm" id="formEmail" placeholder="" />
                </div>
                <div class="mb-3">
                    <label for="formPassword" class="form-label">Email address</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control form-control-sm" id="formPassword" placeholder="" />
                </div>
                <div className="d-flex">
                    <button className="btn color-bg text-light px-4">Sign Up</button>
                    <button onClick={() => form(true)} type="submit" className="btn btn-sm ms-auto">Have an account</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;