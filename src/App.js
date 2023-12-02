import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Quests from './pages/Quests';
import Shop from './pages/Shop';
import { Route, Routes, Link } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Inventory from './pages/Inventory';
import World from './pages/World';



function App() {
  const { isLoggedIn, currentTask, logout } = useUser();

  return (
    <>
      {!isLoggedIn ? (<Login />) : (currentTask ? (<World />) :
      (<div className="App">
        <Header />
        <Navbar />
        <Link to='/quests'><button className='logout-button button-type-light' onClick={logout}>Logout</button></Link>
        <Routes>
          <Route path='/' element={<Quests />} exact/>
          <Route path='/quests' element={<Quests />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/inventory' element={<Inventory />} />
        </Routes>
      </div>))
      }
    </>
  );
}

export default App;
