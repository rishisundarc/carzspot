import React from "react";
import './exterior.css';
import img1 from './img/cover.jpg';
import img2 from './img/window chrome.jpg';
import img3 from './img/Car Bumper Guards.png';
import img5 from './img/door guard.jpg';
import img6 from './img/door handle.jpg';
import img7 from './img/front grill.jpg';
import img8 from './img/roof rail.jpg';
import img9 from './img/door side.jpg';
import img10 from './img/mirror.jpg';
import img11 from './img/chrome letter.jpg';
import img12 from './img/door visor.jpg';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
import { Link } from "react-router-dom";
function Exterior(){
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
            <div class="wrapper11">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Body Covers</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/body-covers">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper21">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Chrome Window Trim Garnish</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-window-trim-garnish">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper31">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Car Bumper Guards</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/rear-bumper-diffuser">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper41">
    <div class="card"><img src={img5} alt="Img5"/>
        <div class="info">
        <h1>Door Guards</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-door-guards">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper51">
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Door Handle Latch Covers</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-handle-door-latch-covers">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper61">    
        <div class="card"><img src={img7} alt="Img7"/>
          <div class="info">
            <h1>Front Grills</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-front-grills">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper71">
    <div class="card"><img src={img8} alt="Img8"/>
        <div class="info">
        <h1>Roof Rails</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-roof-rails">Buy Now</a>
        </div>
    </div>
  </div>
  <div class="wrapper81">
    <div class="card"><img src={img9} alt="Img9"/>
        <div class="info">
        <h1>Side Beadings</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-beading">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper91">
      <div class="card"><img src={img10} alt="Img10"/>
          <div class="info">
          <h1>Side Mirror Covers</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/car-mirror-covers">Buy Now</a>
          </div>
      </div>
    </div>
    <div class="wrapper101">
      <div class="card"><img src={img11} alt="Img12"/>
          <div class="info">
          <h1>Stickers & Decals</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/car-stickers-and-decals">Buy Now</a>
          </div>
      </div>
      </div>
      <div class="wrapper111">
        <div class="card"><img src={img12} alt="Img12"/>
            <div class="info">
            <h1>Car Window Door Visors</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/window-door-visor">Buy Now</a>
            </div>
        </div>
      </div>
      
        </form>
        <div className="cat3">
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

export default Exterior;