import React from 'react';
import car from './car.jpg';
import car1 from './car1.jpg';
import car2 from './car2.jpg';
import './Service.css';
function Service()
{
    return (
        <>
        <div class='m1'><h5>Periodic Car Service</h5></div>
        <div class='m2'><h1>Service Packages</h1></div>
        <form>
        <div className="dia">
            <img src={car} alt="img" width="200" height="300"/>
            </div>
            <button class="buttonb1"><span>Buy Now</span></button>
            <div class='x1'></div>
            <div class='x2'><h2>Basic Service</h2></div>
            <div class='x3'><ul><li>Take 3 Hours</li>
            <li>2 Months Warranty</li>
            <li>Every 5,000Kms/3 Months</li></ul><br></br></div>
            <div class='x4'><p>Service Details</p>
            <p>Designed for regular tune-ups,oil top-up</p>
            </div>
            <div class='x5'><h2>What's Included?</h2></div>
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
        </form>
        <form>
        <div className="dia1">
            <img src={car1} alt="img" width="200" height="300"/>
            </div>
            <button class="buttonb2"><span>Buy Now</span></button>
            <div class='z1'></div>
            <div class='z2'><h2>Standard Service</h2></div>
            <div class='z3'><ul><li>Take 3 Hours</li>
            <li>2 Months Warranty</li>
            <li>Every 10,000Kms/6 Months</li></ul><br></br></div>
            <div class='z4'><p>Service Details</p>
            <p>Helps prevent unnecessary failure & daamage to the major parts of your vehicle</p>
            </div>
            <div class='z5'><h2>What's Included?</h2></div>
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
            
        </form>
        <form>
        <div className="dia2">
            <img src={car2} alt="img" width="200" height="300"/>
            </div>
            <button class="buttonb3"><span>Buy Now</span></button>
            <div class='i1'></div>
            <div class='i2'><h2>Comprehensive Service</h2></div>
            <div class='i3'><ul><li>Take 8 Hours</li>
            <li>2 Months Warranty</li>
            <li>Every 20,000Kms/12 Months</li></ul><br></br></div>
            <div class='i4'><p>Service Details</p>
            <p>Designed to extend engine life & performance of a vehicle</p>
            </div>
            <div class='i5'><h2>What's Included?</h2></div>
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
            
        </form>
        
        </>
    );
} 
export default Service