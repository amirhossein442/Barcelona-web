import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { Home } from './component/Home';
import { About } from './component/About';
import { Service } from './component/Service';
import { Profile } from './component/Profile';
import {Nav} from './component/Nav'
import { useState,createContext } from 'react';

export const ProfileContext = createContext();

function App() {
  const [userName, setUserName]= useState("Amirhossein")
  return (
    <ProfileContext.Provider value={{userName, setUserName}}>
    <Router>
      <div className='header'>
        <h1 className='title'>Barcelona</h1>
        <Nav/>
        </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='*' element={<h1>NOt defind</h1>}></Route>
      </Routes>
    </Router>
    </ProfileContext.Provider>
  );
}

export default App;
