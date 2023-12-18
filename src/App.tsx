import { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Login from './Login.tsx';
import Signup from './Signup.tsx';
import Profile from './Profile.tsx';

function App() {

  return (


    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup/">
            <Route path="" element={<Signup />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>




  )
}

export default App
