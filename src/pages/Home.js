import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function Home() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUserId, setUsername, setIsLoggedIn } = useUser();

  async function Login(e) {
    e.preventDefault();
    if (!loading) {
      if (!username.trim() || !password.trim()) {
        return;
      }

      setLoading(true);

      const data = {username: username, password: password};

      const apiUrl = "http://localhost:3500/api/user/login";

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const { userId } = await response.json();

        setUserId(userId);
        setUsername(username);
        setIsLoggedIn(true);

      } else {
        // TODO
      }

      setUserName("");
      setPassword("");
    }
  }

  async function Register(e) {
    e.preventDefault();
    if (!loading) {
      if (!username.trim() || !password.trim()) {
        return;
      }

      const data = {username: username, password: password};

      const apiUrl = "http://localhost:3500/api/user/register";

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // TODO

      } else {
        // TODO
      }

      setUserName("");
      setPassword("");
    }
  }

  return (
    <div className="login">
      <div className='login-logo'>
        <img src={require('../white-sun.png')} alt='logo of a sun' />
        <h1 id="login-title">Solara</h1>
      </div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={Login}>Login</button>
      <br />
      <button onClick={Register}>Sign Up</button>
    </div>
  );
}

export default Home;
