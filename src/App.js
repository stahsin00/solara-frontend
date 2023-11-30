import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Quests from './pages/Quests';
import Shop from './pages/Shop';
import { Route, Routes } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Characters from './pages/Characters';
import World from './pages/World';



function App() {
  const { isLoggedIn, currentTask } = useUser();

  return (
    <>
      {!isLoggedIn ? (<Home />) : (currentTask ? (<World />) :
      (<div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Quests />} exact/>
          <Route path='/quests' element={<Quests />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/characters' element={<Characters />} />
        </Routes>
      </div>))
      }
    </>
  );
}

export default App;
