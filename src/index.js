import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './index.css';
import Both from './both';
import Sign from './signup';
import Forget from './forget';
import Home from './home';
import Home1 from './home1';
import About from './about';
import Help from './Help';
import Service from './Service';
import FeedBack from './feedback';
import Thanks from './thanksfeed';
import Register from './Registration';
import Contact from './contact';
import Acc from './acc';
import CAS from './Care and Styling';
import Category from './category';
import Electronics from './electronics';
import Exterior from './exterior';
import Interior from './interior';
import Lighting from './lighting';
import Utility from './utility';
import Remain from './remain';
import Gcs from './gcs';
import Gcu from './gcu';
import Insurance from './insurance';
import Ocs from './ocs';
import Ocu from './ocu';
import Tcu from './tcu';
import Tcs from './tcs';
import Mycar from './mycar';
import Addcar from './addcar';
import Payment from './payment';
import Payment1 from './payment1';
import Payment2 from './payment2';
import Thanksu from './thanks';
export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/both" element={<Both/>}/>
                <Route path="/sign" element={<Sign/>}/>
                <Route path="/forget" element={<Forget/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/home1" element={<Home1/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/feedback" element={<FeedBack/>}/>
                <Route path="/tk" element={<Thanks/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/acc" element={<Acc/>}/>
                <Route path="/ai" element={<CAS/>}/>
                <Route path="/ca" element={<Category/>}/>
                <Route path="/i" element={<Interior/>}/>
      <Route path="/e" element={<Exterior/>}/>
      <Route path="/l" element={<Lighting/>}/>
      <Route path="/u" element={<Utility/>}/>
      <Route path="/el" element={<Electronics/>}/>
      <Route path="/c" element={<CAS/>}/>
      <Route path="/remain" element={<Remain/>}/>
      <Route path="/gcs" element={<Gcs/>}/>
      <Route path="/gcu" element={<Gcu/>}/>
      <Route path="/insur" element={<Insurance/>}/>
      <Route path="/ocs" element={<Ocs/>}/>
      <Route path="/ocu" element={<Ocu/>}/>
      <Route path="/tcu" element={<Tcu/>}/>
      <Route path="/tcs" element={<Tcs/>}/>
      <Route path="/mc" element={<Mycar/>}/>
      <Route path="/ac" element={<Addcar/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/payment1" element={<Payment1/>}/>
      <Route path="/payment2" element={<Payment2/>}/>
      <Route path="/you" element={<Thanksu/>}/>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);
