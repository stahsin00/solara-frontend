import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { userLogin, userRegister } from '../utils/user';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { setUserId, setUsername, setIsLoggedIn } = useUser();

  // authentication from server
  async function handleLogin(e) {
    e.preventDefault();

    if (!loading) {
      if (!username.trim() || !password.trim()) {
        return;
      }

      setLoading(true);

      try {
        const response = await userLogin(username, password);
        
        setError(null);
        setSuccess(null);

        setUserId(response);
        setUsername(username);
        setIsLoggedIn(true);

      } catch (e) {
        setError(e.message);
        setSuccess(null);
      } finally {
        setUserName("");
        setPassword("");
        setLoading(false);
      }
    }
  }

  // attempts registration
  async function handleRegister(e) {
    e.preventDefault();

    if (!loading) {
      if (!username.trim() || !password.trim()) {
        return;
      }

      try {
        const response = await userRegister(username, password);

        setError(null);
        setSuccess(response);

      } catch (e) {
        setError(e.message);
        setSuccess(null);
      } finally {
        setUserName("");
        setPassword("");
        setLoading(false);
      }
    }
  }

  return (
    <div className="login">
      <div className='login-logo'>
        <img src={require('../white-sun.png')} alt='logo of a sun' />
        <h1 className="login-title">Solara</h1>
      </div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className='primary-input'
        required
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='primary-input'
        required
      />
      <button onClick={handleLogin} className='button-type-medium'>Login</button>
      <button onClick={handleRegister} className='button-type-medium'>Sign Up</button>
      {error ? (<div className='error-message'>{error}</div>) 
              : 
              (success ? (<div className='success-message'>{success}</div>) 
                        : 
                        <></>)}
    </div>
  );
}

export default Login;
