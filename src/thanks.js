import React from "react";
import { Link } from "react-router-dom";
import './payment.css';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
function Thanksu()
{
    return(
    <><div className='n1'>
        </div><div className='n2'>
                <div className="lb">
                    <div className="screen4">
                        <div className="border">
                            <Link to='/home'><img src={cs} alt="Cs" /></Link>
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
            <div>
            <div class="container text-center">
	<div class="row">
		<div class="col-sm-6 col-sm-offset-3">
			<div class="thanks-wrap">

				<div class="checkmark">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.2 161.2">
						<circle class="path" fill="none" stroke="#fcc400" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1"/>
						<path class="path" fill="none" stroke="#fcc400" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" d="M113 52.8l-38.9 55.6-25.9-22"/>
						<circle class="spin" fill="none" stroke="#555555" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>
					</svg>
				</div>
				<h2>Thanks You</h2>
			</div>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>">for purchases</a>
		</div>
	</div>
</div>
            </div>
            <div className="fde1">
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
                export default Thanksu;
	