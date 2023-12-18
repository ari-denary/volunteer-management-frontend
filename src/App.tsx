import { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Login from './Login.tsx';
import Signup from './Signup.tsx';

function App() {

  return (


    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>




  )
}

export default App
