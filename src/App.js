import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1 id="login-title">Solara</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
      <button>Login</button>
      <br />
      <button>Sign Up</button>
    </div>
  );
}

export default App;
