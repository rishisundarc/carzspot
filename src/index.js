import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './index.css';
import Login from './login';
import Forgot from './forgot';
import Home from './home';
import Home1 from './home1';
import FeedBack from './feedback';
import Signup from './signup';
import About from './about';
import Help from './Help';
import Register from './Registration';
import Service from './Service';
import CAS from './Care and Styling';
import Category from './category';
import Electronics from './electronics';
import Exterior from './exterior';
import Interior from './interior';
import Lighting from './lighting';
import Utility from './utility';
export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/forgot" element={<Forgot/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/home1" element={<Home1/>}/>
                <Route path="/feedback" element={<FeedBack/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/ca" element={<Category/>}/>
                <Route path="/i" element={<Interior/>}/>
                <Route path="/e" element={<Exterior/>}/>
                <Route path="/l" element={<Lighting/>}/>
                <Route path="/u" element={<Utility/>}/>
                <Route path="/el" element={<Electronics/>}/>
                <Route path="/c" element={<CAS/>}/>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);
