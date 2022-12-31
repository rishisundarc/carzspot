import React from "react";
import './utility.css';
import img1 from './img/mobile holder.jpg';
import img2 from './img/wireless charger.jpg';
import img3 from './img/polish.jpg';
import img4 from './img/tyre inflator.jpg';
import img5 from './img/vaccume cleaner.jpg';
import img6 from './img/jumper cables.png';
import img7 from './img/horns.jpg';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
import { Link } from "react-router-dom";
function Utility(){
    return(
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
      <Link to='/service'><div className='c5'>Service</div></Link>
      <Link to='/remain'><div className='c6'>Remainder</div></Link>
      <Link to='/feedback'><div className='c7'>FeedBack</div></Link>
      <Link to='/contact'><div className='c8'>Contact Us</div></Link>
      <Link to='/acc'><div className='c9'>Account</div></Link>
      <Link to='/both'><input className="signupf" type="submit" value='Log Out' /></Link>
        </div>
        <form>
            <div class="wrapper13">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Car GPS Device and Mobile Holder</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-emergency-kits">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper23">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Car Mobile Chargers</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-gps-device-and-mobile-holder">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper33">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Car Polisher</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-chargers">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper43">
    <div class="card"><img src={img4} alt="Img4"/>
        <div class="info">
        <h1>Car Tyre Inflators</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-polisher">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper53">
        <div class="card"><img src={img5} alt="Img5"/>
          <div class="info">
            <h1>Car Vacuum Cleaners</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/tyre-inflators">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper63">    
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Jumper Cables</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-vacuum-cleaner">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper73">
    <div class="card"><img src={img7} alt="Img7"/>
        <div class="info">
        <h1>Car Horns</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/jumper-cable">Buy Now</a>
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
    )
}

export default Utility;