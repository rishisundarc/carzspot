import React from "react";
import {Link} from "react-router-dom" ;
import './category.css';
import img1 from './img/seat cover.jpg';
import img2 from './img/door side.jpg';
import img3 from './img/turn signal.jpg';
import img4 from './img/mobile holder.jpg';
import img5 from './img/Speaker.jpg';
import img6 from './img/brush.jpg';
import cs from './carzspot1.png';
import './header.css';
import './footer.css';
function Category(){
    return(
      <><> <div className='n1'>
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
          <div class="ciwrapper1">
            <div class="ccard"><img src={img1} alt="Img1" />
              <div class="cinfo">
                <h1>Interior Accessories</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <Link to="/i"><button>Buy Now</button></Link>
              </div>
            </div>
          </div>
          <div class="ciwrapper2">
            <div class="ccard"><img src={img2} alt="Img2" />
              <div class="cinfo">
                <h1>Exterior Accessories</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <Link to="/e"><button>Buy Now</button></Link>
              </div>
            </div>
          </div>
          <div class="ciwrapper3">
            <div class="ccard"><img src={img3} alt="Img3" />
              <div class="cinfo">
                <h1>Car Lighting Accessories</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <Link to="/l"><button>Buy Now</button></Link>
              </div>
            </div>
          </div>
          <div class="ciwrapper4">
            <div class="ccard"><img src={img4} alt="Img4" />
              <div class="cinfo">
                <h1>Car Utility Accessories</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <Link to="/u"><button>Buy Now</button></Link>
              </div>
            </div>
          </div>
          <div class="ciwrapper5">
            <div class="ccard"><img src={img5} alt="Img5" />
              <div class="cinfo">
                <h1>Car Electronic Accessories</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <Link to="/el"><button>Buy Now</button></Link>
              </div>
            </div>
          </div>
          <div class="ciwrapper6">
            <div class="ccard"><img src={img6} alt="Img6" />
              <div class="cinfo">
                <h1>Car Care and Styling</h1>
                <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
                <Link to="/c"><button>Buy Now</button></Link>
              </div>
            </div>
          </div>
        </form>
      </><div className="cat1">
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

        </div></>
    );
}

export default Category;