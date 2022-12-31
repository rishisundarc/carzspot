import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
function Register()
{
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
            <div class='bs'>
         
                <div class='r1'>Registration</div>
                <div class='inputr'>
                    <div class='input-containerr'>
                        <input class="input-fieldr" type="text" placeholder="Name" id="name" required></input> </div></div>
                <div class='input5'>
                    <div class='input5-container'>
                        <input class="input5-field" type="text" placeholder="Mobile No" id="name" required></input> </div></div>
                <div class='input1'>
                    <div class='input1-container'>
                        <input class="input1-field" type="text" placeholder="Email Address" id="name" required></input> </div></div>
                <div class='r2'>Vehicle Details</div>
                <div class='input2'>
                    <div class='input2-container'>
                        <input class="input2-field" type="text" placeholder="Brand" id="name" required></input> </div></div>
                <div class='input3'>
                    <div class='input3-container'>
                        <input class="input3-field" type="text" placeholder="Model" id="name" required></input> </div></div>
                <div class='input4'>
                    <div class='input4-container'>
                        <input class="input4-field" type="text" placeholder="Register No" id="name" required></input> </div></div><br></br><br></br>
                <div><Link to='/both'><input class="sr1" type='submit' value="Submit"></input></Link></div>
                </div>
        </form>
        <div className="sf1">
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
export default Register;
