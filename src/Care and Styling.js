import React from "react";
import { Link } from "react-router-dom";
import './Care and Styling.css';
import cs from './carzspot1.png';
import img1 from './img/blind mirror.jpg';
import img2 from './img/brush.jpg';
import img3 from './img/car care kit.jpg';
import img4 from './img/blind mirror.jpg';
import img5 from './img/key cover.jpg';
import img6 from './img/wax.jpg';
import img7 from './img/scratch remover.jpg';
import img8 from './img/shampoo.jpg';
import img9 from './img/tyre dresser.jpg';
import img10 from './img/repair kit.jpg';
import img11 from './img/tyre lock.jpg';
import './header.css';
import './footer.css';
function CAS(){
    return(
      <><>
        <div className='n1'>
          <div className="glow">Carzspot</div>
        </div>
        <div className='n2'>
          <div className="lb">
            <div className="screen4">
              <div className="border">
                <Link to='/home'><img src={cs} alt="Cs" /></Link>
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
          <Link to='/contact'><div className='c8'>Contact Us</div></Link>
          <Link to='/acc'><div className='c9'>Account</div></Link>
          <Link to='/both'><input className="signupf" type="submit" value='Log Out' /></Link>
        </div>
        <form>
          <div class="wrapper15">
            <div class="card"><img src={img1} alt="Img1" />
              <div class="info">
                <h1>Blind Spot Mirror</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-blind-spot-mirror">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper25">
            <div class="card"><img src={img2} alt="Img2" />
              <div class="info">
                <h1>Cleaning cloth</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-cleaning-cloth-towel-softspun">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper35">
            <div class="card"><img src={img3} alt="Img3" />
              <div class="info">
                <h1>Car Cleaning Kit</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-cleaning-kit">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper45">
            <div class="card"><img src={img4} alt="Img4" />
              <div class="info">
                <h1>Exhaust Tip Muffler</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-exhaust-tip-silencer-cover-tube-muffler">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper55">
            <div class="card"><img src={img5} alt="Img5" />
              <div class="info">
                <h1>Key Covers</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-key-cover">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper65">
            <div class="card"><img src={img6} alt="Img6" />
              <div class="info">
                <h1>Polish and Wax</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-polish-wax-liquid">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper75">
            <div class="card"><img src={img7} alt="Img7" />
              <div class="info">
                <h1>Scratch Remover</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-scratch-remover">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper85">
            <div class="card"><img src={img8} alt="Img8" />
              <div class="info">
                <h1>Shampoo</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-shampoo">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper95">
            <div class="card"><img src={img9} alt="Img9" />
              <div class="info">
                <h1>Tyre Polish Dresser</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-tyre-polish-dresser">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper105">
            <div class="card"><img src={img10} alt="Img10" />
              <div class="info">
                <h1>Tyre Puncture Kit</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/tyre-puncture-kit">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="wrapper115">
            <div class="card"><img src={img11} alt="Img11" />
              <div class="info">
                <h1>Tyre Wheel Lock</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <a href="https://carhatke.com/car-tyre-wheel-lock">Buy Now</a>
              </div>
            </div>
          </div>

        </form>
      </><div className="cad1">
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

export default CAS;