
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'

import './index.css'


// pages

import { Home } from './pages/Home';
import { About } from './pages/About';
import {Navbar} from './components/Navbar'
import { Error } from './pages/Error';
import './App.css';


function App() {
  



  
  return (
    <>
    <Navbar />
    <div className="container">
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>

     
     
    </div>
    </>
    
  );
}

export default App;
