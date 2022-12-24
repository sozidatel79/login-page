import React, {useState} from 'react';
import './register.css';
import Request from "../api/api";


const LoginForm = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[repeatPassword, setRepeatPassword] = useState('');

    const registerHandler = async e => {
        e.preventDefault();
        if(password !== repeatPassword) {
            alert('Passwords do not match!');
            return false;
        }

        Request.post('/register', { email: email, password: password }).then(response => {
            if(response.data.status === 'error'){
                alert(response.data.message)
            } else {
                alert('Your account was successfully created')
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
                    <form onSubmit={registerHandler} className="login100-form validate-form">

                        <span className="login100-form-title p-b-26">
                            Register Account
                        </span>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='email'
                                className="input100"
                                type="text"
                                required={true}
                                name="email"
                            />
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='password'
                                className="input100"
                                type="password"
                                name="password"
                                required={true}
                            />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                placeholder='repeat password'
                                className="input100"
                                type="password"
                                name="repeat_password"
                                required={true}
                            />
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button type='submit' className="login100-form-btn">
                                    Register
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
