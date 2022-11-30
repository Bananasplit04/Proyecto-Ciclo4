import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Register from './components/Register';
import IndexApp from './components/indexApp';

function App() {
  return (
    <BrowserRouter>
       <Routes>
            <Route path= '/' element={<IndexApp />}/>
            <Route path= '/login' element={<Login />}/>
            <Route path= '/Register' element={<Register />}/>
            <Route path= '/ForgotPassword' element={<ForgotPassword />}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
