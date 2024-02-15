import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom';

function Login() {
  const {login} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login