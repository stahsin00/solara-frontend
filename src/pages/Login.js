import React from 'react';
import { userLogin } from '../utils/user';
import { FaGoogle } from 'react-icons/fa';
import './Login.css';

function Login() {
  async function handleLogin(e) {
    e.preventDefault();
    console.log("logging in");
    userLogin();
  }

  return (
    <div className="login">
      <div className='login-logo'>
        <img src={require('../white-sun.png')} alt='logo of a sun' />
        <h1 className="login-title">Solara</h1>
      </div>
      <button onClick={handleLogin} className='button-type-medium'>
        <div className='login-logo'>
          <FaGoogle className="button-icon" />
          Login with Google
        </div>
      </button>
    </div>
  );
}

export default Login;
