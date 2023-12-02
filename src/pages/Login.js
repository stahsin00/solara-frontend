import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { setUserId, setUsername, setIsLoggedIn } = useUser();

  // authentication from server
  async function Login(e) {
    e.preventDefault();
    if (!loading) {
      if (!username.trim() || !password.trim()) {
        return;
      }

      setLoading(true);

      const data = {username: username, password: password};
      const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/login`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const { userId } = await response.json();
        setError(null);
        setSuccess(null);

        setUserId(userId);
        setUsername(username);
        setIsLoggedIn(true);
      } else {
        const { message } = await response.json();
        setError(message);
        setSuccess(null);
      }

      setUserName("");
      setPassword("");
      setLoading(false);
    }
  }

  // attempts registration
  async function Register(e) {
    e.preventDefault();
    if (!loading) {
      if (!username.trim() || !password.trim()) {
        return;
      }

      const data = {username: username, password: password};
      const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/register`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const { message } = await response.json();
        setError(null);
        setSuccess(message);

      } else {
        const { message } = await response.json();
        setError(message);
        setSuccess(null)
      }

      setUserName("");
      setPassword("");
      setLoading(false);
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
      <button onClick={Login} className='button-type-medium'>Login</button>
      <button onClick={Register} className='button-type-medium'>Sign Up</button>
      {error ? (<div className='error-message'>{error}</div>) 
              : 
              (success ? (<div className='success-message'>{success}</div>) 
                        : 
                        <></>)}
    </div>
  );
}

export default Login;
