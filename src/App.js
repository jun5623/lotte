import { useState, } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Commponents/Header';
import Home from './Commponents/Home';
import Burger_List from './Commponents/Burger_List';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:category/:id' element={<Burger_List/>}/>
      </Routes>
    </div>
  );
}

export default App;
