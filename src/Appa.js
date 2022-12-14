import React from 'react';
import {BrowserRouter as Router, Route , Routes } from "react-router-dom" ;
import CAS from './Care and Styling';
import Category from './category';
import Electronics from './electronics';
import Exterior from './exterior';
import Interior from './interior';
import Lighting from './lighting';
import Utility from './utility';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Category/>}/>
      <Route path="/i" element={<Interior/>}/>
      <Route path="/e" element={<Exterior/>}/>
      <Route path="/l" element={<Lighting/>}/>
      <Route path="/u" element={<Utility/>}/>
      <Route path="/el" element={<Electronics/>}/>
      <Route path="/c" element={<CAS/>}/>
    </Routes>
    </Router>
  ); 
}

export default App;
