import React, {useState, useRef} from 'react';
import './UserProfile.css';
import Request from "../api/api";

const UserProfile = ({currentUser, setCurrentUser, loggedIn, setLoggedIn}) =>  {

    const[name, setName] = useState('');
    const[lastName, setLastName] = useState('');
    const[address, setAddress] = useState('');
    const[gender, setGender] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');

    const logoutHandler = (user) => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null)
        setLoggedIn(false)
    }

    const updateHandler = async e => {
        e.preventDefault();
        const data = {
            id: currentUser.id,
            name: name,
            last_name: lastName,
            address: address,
            gender: gender,
            phone_number: phoneNumber,
        }
        Request.post('/user/update', data).then(response => {
            if(response.data){
                setCurrentUser(response.data)
                alert('Your profile successfully updated')
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
                    <span className="login100-form-title p-b-26">
                        User Profile
                    </span>
                    <form onSubmit={updateHandler} className="login100-form validate-form">
                        <div className="wrap-input100">
                            <input
                                onChange={(e) => setName(e.target.value) }
                                placeholder='Name'
                                className="input100"
                                type="text"
                                name="name"
                                defaultValue={currentUser.name}
                            />
                        </div>
                        <div className="wrap-input100">
                            <input
                                onChange={(e) => setLastName(e.target.value) }
                                placeholder='Last Name'
                                className="input100"
                                type="text"
                                name="last_name"
                                defaultValue={currentUser.last_name}
                            />
                        </div>
                        <div className="wrap-input100">
                            <input
                                placeholder='Email'
                                className="input100"
                                type="text"
                                name="email"
                                readOnly={true}
                                defaultValue={currentUser.email + ' (readonly)'}
                            />
                        </div>
                        <div className="wrap-input100">
                            <input
                                onChange={(e) => setAddress(e.target.value) }
                                placeholder='Address'
                                className="input100"
                                type="text"
                                name="address"
                                defaultValue={currentUser.address}
                            />
                        </div>
                        <div className="wrap-input100">
                            <select onChange={(e) => setGender(e.target.value) } className='input100' name="gender" id="">
                                <option value="" >Select Your Gender</option>
                                <option selected={('male' === currentUser.gender) ? 'selected' : '' } value="male" >Male</option>
                                <option selected={('female' === currentUser.gender) ? 'selected' : '' } value="female">Female</option>
                            </select>
                        </div>
                        <div className="wrap-input100">
                            <input
                                onChange={(e) => setPhoneNumber(e.target.value) }
                                placeholder='Phone Number'
                                className="input100"
                                type="text"
                                name="phone_number"
                                defaultValue={currentUser.phone_number}
                            />
                        </div>
                        <div className="wrap-input100">
                            <input
                                placeholder='Your IP'
                                className="input100"
                                type="text"
                                name="ip"
                                readOnly={true}
                                defaultValue={'Your register IP: ' + currentUser.ip + ' (readonly)'}
                            />
                        </div>
                        <div className="wrap-input100 validate-input">
                            <input
                                placeholder='Profile created at'
                                className="input100"
                                type="text"
                                name="created_at"
                                readOnly={true}
                                defaultValue={'Profile created at: ' + currentUser.created_at + ' (readonly)'}
                            />
                        </div>
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button type='submit' className="login100-form-btn">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn"></div>
                            <button onClick={logoutHandler} type='button' className="login100-form-btn">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}

export default UserProfile;
