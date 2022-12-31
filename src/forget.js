import React from "react";
import { Link } from "react-router-dom";
import './forget.css';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
function Forget(){
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
    <div className="m123">FORGOT PASSWORD</div>
        <div class="card1-front">
									<div class="center-wrap1">
										<div class="section1 text-center">
											<h4 class="mb-4 pb-3">Forgot Password</h4>
											<div class="form-group1">
												<input type="email" name="logname" class="form-style" placeholder="Your Email" id="logname" autocomplete="off"/>
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group1 mt-2">
												<input type="password" name="logemail" class="form-style" placeholder="Reset Password" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group1 mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Conform Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<Link to ='/both'><a href="#" class="btn mt-4">submit</a></Link>
				      					</div>
			      					</div>
			      				</div>
                                <div className="b1"></div>
                                </>
    );
}
export default Forget;