import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Routes,Route,BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Employer from './Pages/Employer';
import Hrrecruitmenttraining from './Pages/Hrrecruitmenttraining';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/employer" element={<Employer/>}/>
        <Route path="/hrrecruitmenttraining" element={<Hrrecruitmenttraining/>}/>
      </Routes>
    </BrowserRouter>
  );
}


