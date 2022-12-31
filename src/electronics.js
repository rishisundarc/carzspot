import React from "react";
import './electronics.css';
import img1 from './img/light1.jpeg';
import img2 from './img/Speaker.jpg';
import img3 from './img/Speaker.jpg';
import img4 from './img/Smart Stereo.png';
import img5 from './img/Screen.jpeg';
import img6 from './img/wheel control.jpg';
import img7 from './img/Camera.jpeg';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
import { Link } from "react-router-dom";
function Electronics(){
    return(
      <>
       <div className='n1'>
          <div className="glow">Carzspot</div>
                </div>
    <div className='n2'>
    <div className="lb">
      <div className="screen4">
         <div className="border">
                <Link to ='/home'><img src={cs} alt="Cs"/></Link>
    </div>
    </div>
    </div>
      <div className='c1'>Home</div>
      <Link to='/about'><div className='c2'>About Us</div></Link>
      <Link to='/help'><div className='c3'>Help</div></Link>
      <Link to='/ca'><div className='c4'>Accessories</div></Link>
      <Link to='/service'><div className='c5'>Service</div></Link>
      <Link to='/remain'><div className='c6'>Remainder</div></Link>
      <Link to='/feedback'><div className='c7'>FeedBack</div></Link>
      <Link to ='/contact'><div className='c8'>Contact Us</div></Link>
      <Link to ='/acc'><div className='c9'>Account</div></Link>
      <Link to='/both'><input className="signupf" type="submit" value='Log Out' /></Link>
        </div>
        <form>
            <div class="wrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Security System</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-security-system">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper2">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Amplifier</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-amplifier-for-car-audio-system">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper3">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Bass Tube Woofers</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-sub-woofer-base-tube-car-audio-system">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper4">
    <div class="card"><img src={img4} alt="Img4"/>
        <div class="info">
        <h1>Smart Stereo</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-rear-view-monitor">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper5">
        <div class="card"><img src={img5} alt="Img5"/>
          <div class="info">
            <h1>Rear View Monito</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-steering-wheel-control-button">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper6">    
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Steering Wheel Controler</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/reverse-parking-sensors-and-reverse-camera">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper7">
    <div class="card"><img src={img7} alt="Img7"/>
        <div class="info">
        <h1>Sensors & Camera</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-android-infotainment-system">Buy Now</a>
        </div>
    </div>
  </div>
  
        </form>
        <div className="cat4">
          <div className="border11">
            <Link to='/home'><img src={cs} alt="Cs" /></Link>
          </div>
          <div className='cf23'>Carzspot<br />3A ,VASU Street, Shreena Avenue, Tanu Towers, <br />Coimbatore <br />Tamil Nadu<br />627002.</div>
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

export default Electronics;