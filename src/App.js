import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Quests from './pages/Quests';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/quests' element={<Quests />} />
      </Routes>
    </div>
  );
}

export default App;
