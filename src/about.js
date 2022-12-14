import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import './header.css';
import './footer.css';
function About(){
  return(
    <>
    <div className='n1'>
      <div className='contactf'>Contact Us</div>
      <div className='emailf'>E-Mail : carzspot@gmail.Conform</div>
      <div className='phonef'>Phone : 769590305</div>
    </div>
    <div className='n2'>
      <div className='t'>CARZSPOT</div>
      <Link to='/home'><div className='h1'>Home</div></Link>
      <Link to='/about'><div className='h2'>About Us</div></Link>
      <Link to='/help'><div className='h3'>Help</div></Link>
      <Link to='/ca'><div className='h4'>Accessories</div></Link>
      <Link to='/service'><div className='h5'>Service</div></Link>
      <div className='h6'>Remainder</div>
      <Link to='/feedback'><div className='h7'>FeedBack</div></Link>
      <div className='h8'>Contact Us</div>
      <div className='h9'>Account</div>
      <Link to='/login'><input class="Loginf" type="button" value='Login' /></Link>
      <input class="signupf" type="submit" value='Sign Up' />
    </div>
    <div className='a1'>Welcome to carzspot<br/>
Hello everyone we are carzspot and we are delighted to be of help as you take care of your beloved cars<br/>
 We offers tons of services such as periodic maintenance services which included everything that your car requires in order to be flawless.<br/>
  We even give out reminders as to when you have to check certain aspects of the car<br/>
 We assure you the usage of only legit and the best materials for your car<br/>
You can even beautify your car with our sister website mentioned below<br/>
We car for your car as we would for our own<br/>
We would love to have you and your cars as a part of our carzspot family.<br/>
We assure you the usage of only legit and the best materials for your car through one of the reputed accessories marketing  company.</div>
    <div className='b1'>
    <div className='b'>
      Contact
    </div>
    <div className='text1'>
    12900 Cypress North Houston
Rd Cypress, TX 77429<br/>7695903305<br/>carzspot@gmail.com
    </div>
    </div>
    </>
    );
    }
    export default About;