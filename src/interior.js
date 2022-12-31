import React from "react";
import { Link } from "react-router-dom";
import './interior.css';
import img1 from './img/floormat.png';
import img2 from './img/let Step Plate.png';
import img3 from './img/car sunshades.jpg';
import img4 from './img/armrest.jpg';
import img5 from './img/car pedal.jpg';
import img6 from './img/air.jpg';
import img7 from './img/seat cover.jpg';
import img8 from './img/gear knobs.jpeg';
import img9 from './img/chrome.jpg';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
function Interior(){
    return(
      <> <div className='n1'>
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
            <div class="cwrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>FloorMat</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-mats">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="cwrapper2">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Door Scuff Sill Plate</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-foot-step-sill-plate">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="cwrapper3">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Window Sunshade</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-sunshades">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="cwrapper4">
    <div class="card"><img src={img4} alt="Img4"/>
        <div class="info">
        <h1>Armrest</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-armrest">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="cwrapper5">
        <div class="card"><img src={img5} alt="Img5"/>
          <div class="info">
            <h1>Car Pedal Kit</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-pedal-kit">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="cwrapper6">    
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Perfume</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-perfumes">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="cwrapper7">
    <div class="card"><img src={img7} alt="Img7"/>
        <div class="info">
        <h1>Seat Cover</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/seat-covers">Buy Now</a>
        </div>
    </div>
  </div>
  <div class="cwrapper8">
    <div class="card"><img src={img8} alt="Img8"/>
        <div class="info">
        <h1>Gear Knobs</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/gear-knobs">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="cwrapper9">
      <div class="card"><img src={img9} alt="Img9"/>
          <div class="info">
          <h1>Seat Cover</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/interior-chrome-accessories">Buy Now</a>
          </div>
      </div>
    </div>
    
      
        </form>
        <div className="cat2">
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
    )
}

export default Interior;