import React from "react";
import { Link } from "react-router-dom";
import './both.css';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
function Account(){
    return(
    <>    
      <a href="https://front.codes/" class="logo" target="_blank">
	</a>
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
      <div className='c6'>Remainder</div>
      <Link to='/feedback'><div className='c7'>FeedBack</div></Link>
      <div className='c8'>Contact Us</div>
      <div className='c9'>Account</div>
      <Link to='/login'><input class="Loginf" type="button" value='Log In' /></Link>
      <Link to='/sign'><input class="signupf" type="button" value='Sign Up' /></Link>
    </div>
    </>
    );
}