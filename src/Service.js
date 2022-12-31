import React from 'react';
import { Link } from 'react-router-dom';
import car from './car.jpg';
import car1 from './car1.jpg';
import car2 from './car2.jpg';
import cs from './carzspot1.png';
import './header.css'
import './Service.css';
function Service()
{
    return (
        <>
        <div className='n1'>
                </div>
    <div className='n2'>
    <div className="lb">
      <div className="screen4">
         <div className="border">
                <Link to ='/home'><img src={cs} alt="Cs"/></Link>
    </div>
    </div>
    </div>
      <Link to='/home'><div className='c1'>Home</div></Link>
      <Link to='/about'><div className='c2'>About Us</div></Link>
      <Link to='/help'><div className='c3'>Help</div></Link>
      <Link to='/ca'><div className='c4'>Accessories</div></Link>
      <Link to='/payment'><div className='c5'>Service</div></Link>
      <Link to='/remain'><div className='c6'>Remainder</div></Link>
      <Link to='/feedback'><div className='c7'>FeedBack</div></Link>
      <Link to='/contact'><div className='c8'>Contact Us</div></Link>
      <Link to='/acc'><div className='c9'>Account</div></Link>
      <Link to='/both'><input className="signupf" type="submit" value='Log Out' /></Link>
        </div>
        <div class='m1'><h5>Periodic Car Service</h5></div>
        <div class='m2'>Service Packages</div>
        
           
            <div class='x1'><div className="dia">
            <img src={car} alt="img" width="200" height="300"/>
            </div>
            <Link to='/payment'><button class="buttonb1"><span>Buy Now</span></button></Link></div>
            <div class='x2'>Basic Service</div>
            <div class='x3'><ul><li>Take 3 Hours</li>
            <li>2 Months Warranty</li>
            <li>Every 5,000Kms/3 Months</li></ul><br></br></div>
            <div class='x4'><p>Service Details</p>
            <p>Designed for regular tune-ups,oil top-up</p>
            </div>
            <div class='x5'>What's Included?</div>
            <div class='x6'><ul><li>Inspection</li></ul></div>
            <div class='m3'><p>-Heater/Spark Plugs</p></div>
            <div class='x7'><ul><li>Replacement</li></ul></div>
           <div class='m4'> <p>-Engine Oil</p></div>
           <div class='m5'> <p>-Oil Filter</p></div>
            <div class='x8'><ul><li>Top-up</li></ul></div>
           <div class='m6'> <p>-Coolant(200ml)</p></div>
            <div class='m7'><p>-Battery Water (500ml)</p></div>
            <div class='x9'><ul><li>Cleaning</li></ul></div>
            <div class='m8'><p>-Air Filter</p></div>
            <div class='m9'><p>-Interior Vaccuming</p></div>
            <div>
                
            <div class='z1'>
            <div className="dia1">
            <img src={car1} alt="img" width="200" height="300"/>
            </div>
            <Link to ='/payment1'><button class="buttonb2"><span>Buy Now</span></button></Link>
            </div>

            <div class='z2'>Standard Service</div>
            <div class='z3'><ul><li>Take 3 Hours</li>
            <li>2 Months Warranty</li>
            <li>Every 10,000Kms/6 Months</li></ul><br></br></div>
            <div class='z4'><p>Service Details</p>
            <p>Helps prevent unnecessary failure & daamage to the major parts of your vehicle</p>
            </div>
            <div class='z5'>What's Included?</div>
            <div class='z6'><ul><li>Inspection</li></ul></div>
            <div class='o3'><p>-Heater</p>
            <p>-Fuel Filter</p>
            </div>
            <div class='z7'><ul><li>Replacement</li></ul></div>
           <div class='o4'> <p>-Engine Oil</p></div>
           <div class='o5'> <p>-Oil Filter</p></div>
            <div class='z8'><ul><li>Top-up</li></ul></div>
           <div class='o6'> <p>-Coolant(200ml)</p></div>
            <div class='o7'><p>-Battery Water (500ml)</p></div>
            <div class='z9'><ul><li>Service</li></ul></div>
            <div class='o8'><p>-Front Brake Pads</p></div>
           <div class='o9'> <p>-Rear Brake Shoes</p></div>

            </div>
            <div>
            
            <div class='i1'>
            <div className="dia2">
            <img src={car2} alt="img" width="200" height="300"/>
            </div>
            <Link to ='/payment2'><button class="buttonb3"><span>Buy Now</span></button></Link>
            </div>
            <div class='i2'>Comprehensive Service</div>
            <div class='i3'><ul><li>Take 8 Hours</li>
            <li>2 Months Warranty</li>
            <li>Every 20,000Kms/12 Months</li></ul><br></br></div>
            <div class='i4'><p>Service Details</p>
            <p>Designed to extend engine life & performance of a vehicle</p>
            </div>
            <div class='i5'>What's Included?</div>
            <div class='i6'><ul><li>Inspection</li></ul></div>
            <div class='j3'><p>-Heater</p></div>
            <div class='i7'><ul><li>Replacement</li></ul></div>
           <div class='j4'> <p>-Engine Oil</p></div>
           <div class='j5'> <p>-Oil Filter</p></div>
            <div class='i8'><ul><li>Top-up</li></ul></div>
           <div class='j6'> <p>-Coolant(200ml)</p></div>
            <div class='j7'><p>-Battery Water (500ml)</p></div>
            <div class='i9'><ul><li>Service</li></ul></div>
            <div class='j8'><p>-Front Brake Pads</p></div>
           <div class='j9'> <p>-Rear Brake Shoes</p></div>

            </div>
            <div className='bs1'>
        <div className="border11">
                <Link to ='/home'><img src={cs} alt="Cs"/></Link>
    </div>
    <div className='cf23'>Carzspot<br/>3A ,VASU Street, Shreena Avenue, Tanu Towers, <br/>Coimbatore <br/>Tamil Nadu<br/>627002.</div>
    <div className='cf24'>Phone : 7695903305</div>
    <div className='cf25'>Gmail : Carzspot@gmail.com</div>
    <div className='cf1'>Home</div>
      <Link to='/about'><div className='cf2'>About Us</div></Link>
      <Link to='/help'><div className='cf3'>Help</div></Link>
      <Link to='/ca'><div className='cf4'>Accessories</div></Link>
      <Link to='/feedback'><div className='cf5'>FeedBack</div></Link>
      <div className='cf6'>Contact Us</div>
      <div className='cf7'>Account</div>
      <div className='cf8'>Services</div>
      <div className='cf9'>• Basic Service</div>
      <div className='cf10'>• Standard Service</div>
      <div className='cf11'>• Comprehensive Service</div>
      <div className='cf15'>Remainder</div>
      <div className='cf16'>• Basic Service</div>
      <div className='cf17'>• Standard Service</div>
      <div className='cf18'>• Comprehensive Service</div>
      <div className='cf19'>Social media</div>
      <div className='cf20'>• Instagram</div>
      <div className='cf21'>• Facebook</div>
      <div className='cf22'>• Twitter</div>
      <div className='cf12'>Copyright © 2022 CarzSpot Service Center. All Rights Reserved</div>
      <div className='cf13'>Privacy Policy</div>
      <div className='cf14'>Terms and Condition</div>
    </div>
        </>
    );
} 
export default Service