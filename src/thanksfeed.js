import React from "react";
import { Link } from "react-router-dom";
import './thanksfeed.css';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
import fds from './feedback.jpg';
function Thanks()
{
    return(
        <><><div className='n1'>
        </div>
            <div className='n2'>
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
            <div className="border121">
                <Link to='/home'><img src={fds} alt="Fds" /></Link>
            </div>
            <div className="tkf">Thanks for your FeedBack<br />❤️</div>
        </><div className="fd1">
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
                export default Thanks;