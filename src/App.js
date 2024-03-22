import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { useUser } from './context/UserContext';

import Header from './components/Header';
import Nav from './components/Nav';

import Login from './pages/Login'

import Quests from './pages/Quests';
import Inventory from './pages/Inventory';
import Shop from './pages/Shop';
import Tutorial from './pages/Tutorial';
import World from './pages/World';



function App() {
  const { isLoggedIn, currentTask, logout } = useUser();

  return (
    <>
      {!isLoggedIn ? (<Login />) : (currentTask ? (<World />) :
      (<div className="App">
        <Header />
        <Nav />
        <Link to='/quests'><button className='logout-button button-type-light' onClick={logout}>Logout</button></Link>
        <Routes>
          <Route path='/' element={<Quests />} exact/>
          <Route path='/quests' element={<Quests />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/tutorial' element={<Tutorial />} />
        </Routes>
      </div>))
      }
    </>
  );
}

export default App;
