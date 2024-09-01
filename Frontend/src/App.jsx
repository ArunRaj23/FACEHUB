import React from 'react'
import Home from './pages/home/Home';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
  const {user}=useContext(AuthContext);
  
  const username= user? user.username: null;
  return(
    <Router>
      <Routes>
        <Route path='/' element={ user? <Home username={username}/> : <Signup/>} ></Route>
        <Route path='/login' element={user? <Navigate to='/' /> : <Login/>} ></Route>
        <Route path='/signup' element={user? <Navigate to='/' /> : <Signup/>} ></Route>
        <Route path='/profile/:username' element={<Profile/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App;