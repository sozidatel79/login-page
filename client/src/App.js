import React,{useState, useEffect} from 'react';
import './App.css';
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import UserProfile from "./components/user-profile/UserProfile";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("currentUser"));
  const[currentUser, setCurrentUser] = useState(initialState);

  useEffect( () => {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser])

  return(
      <div className="App">
          {(currentUser) ? (
              <UserProfile setCurrentUser={setCurrentUser} currentUser={currentUser} />
          ) : (
              <div className='front-page'>
                  <RegisterForm/>
                  <div className="component-separator">
                      OR
                  </div>
                  <LoginForm setCurrentUser={setCurrentUser} />
              </div>
          )}
      </div>
  )

}

export default App;
