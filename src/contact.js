import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
import phone from './image6.png';
import locate from './image7.png';
import mail from './image8.png';
import insta from './instagram.png';
import twitter from './twitter.png';
import face from './facebook.png';
import whats from './whatsapp.png';
function Contact(){
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
      <div className='ct1'>HOW TO FIND CARzSPOT AUTOWORKS</div>
      <div className='ct2'>CALL US NOW AT</div>
      <div className='border31'>
        <img src={phone} alt='Phone' />
      </div>
      <div className='ct3'>769590305</div>
      <div className='ct4'>CARzSPOT NOW AT</div>
      <div className='border32'>
        <img src={locate} alt='Locate' />
      </div>
      <div className='ct5'>3A ,VASU Street, Shreena Avenue, Tanu Towers,<br />Coimbatore</div>
      <div className='ct6'>GMAIL</div>
      <div className='border33'>
        <img src={mail} alt='Gmail' />
      </div>
      <div className='ct7'>contact_carzspot@gmail.com</div>
      <div className='ct8'>INSTAGRAM</div>
      <a href ="https://instagram.com/carz_spot_?igshid=YmMyMTA2M2Y="><div className='border34'>
        <img src={insta} alt='Insta' />
      </div>
      <div className='ct9'>carz_spot_</div></a>
      <div className='ct10'>TWITTER</div>
      <a href ="hhttps://mobile.twitter.com/CarZspot_">
      <div className='border35'>
        <img src={twitter} alt='Twitter' />
      </div>
      <div className='ct11'>carZspot_</div></a>
      <div className='ct12'>FACEBOOK</div>
      <div className='border36'>
        <img src={face} alt='Twitter' />
      </div>
      <div className='ct13'>Carzspot</div>
      <div className='ct14'>WHATSAPP</div>
      <div className='border37'>
        <img src={whats} alt='Twitter' />
      </div>
      <div className='ct15'>7695903305</div>
    </><div className='bct1'>
        <div className="border11">
          <Link to='/home'><img src={cs} alt="Cs" /></Link>
        </div>
        <div className='cf23'>Carzspot<br />3A ,VASU Street, Shreena Avenue, Tanu Towers, <br />Coimbatore <br />Tamil Nadu<br />627002.</div>
        <div className='cf24'>Phone : 7695903305</div>
        <div className='cf25'>Gmail : Carzspot@gmail.com</div>
        <Link to='/home'><div className='cf1'>Home</div></Link>
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
export default Contact;