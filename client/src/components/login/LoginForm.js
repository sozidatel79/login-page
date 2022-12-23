import React, {useState} from 'react';
import './login.css';
import axios from "axios";
import Request from "../api/api";

const LoginForm = ({setCurrentUser}) => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const loginHandler = async e => {
        e.preventDefault();
        Request.post('/login', { email: email, password: password }).then(response => {
            if(response.data){
                setCurrentUser(response.data)
            }else {
                alert('Wrong username or password')
            }
        }).catch(error => {
                console.log(error);
            }
        )
    }

    return (
        <html lang="en">
        <head>
            <title>Login</title>
        </head>
        <body>
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form onSubmit={loginHandler} className="login100-form validate-form">

                        <span className="login100-form-title p-b-26">
                            Dashboard Login
                        </span>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                            <input
                                onChange={(e) => setEmail( e.target.value)}
                                placeholder='email'
                                className="input100"
                                type="text"
                                name="email"
                            />
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input
                                onChange={(e) => setPassword( e.target.value)}
                                placeholder='password'
                                className="input100"
                                type="password"
                                name="password"
                            />
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button type='submit' className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
};

export default LoginForm;
