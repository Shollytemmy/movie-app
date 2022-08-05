
import {Routes, Route} from 'react-router-dom'

import './index.css'


// pages

import { Home } from './pages/Home';
import { About } from './pages/About';
import {Navbar} from './components/Navbar'
import { Error } from './pages/Error';
import { MovieInfo } from './pages/MovieInfo';
import './App.css';
import { Favourite } from './pages/Favourite';



function App() {
  



  
  return (
    <>
    <Navbar />
    <div className="container">
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='movieInfo/:id' element={<MovieInfo />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='*' element={<Error />} />
      </Routes>

     
     
    </div>
    </>
    
  );
}

export default App;
