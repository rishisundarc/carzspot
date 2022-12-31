import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import './header.css';
import './footer.css';
import car from './carh.jpg';
import brand from './brand.png';
import ps from './image 1.png';
import ci from './image.png';
import tyre from './image2.png';
import im from './image3.png';
import i from './image4.png';
import sr from './image5.png';
import cs from './carzspot1.png';
function Home1(){
    return(
        <><>
                    <div className='n1'>
                            <div className="glow">Carzspot</div>
                    </div>
            </><div className='n2'>
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
                    </div><div className="screen2">
                            <div className="border1">
                                    <img src={car} alt="Car" />
                                    <div className="rishi">QUALITY CAR ASSISTANCE</div>
                                    <div className="sundar"></div>
                            </div>
                    </div><div className='rs1'>
                            <div className="border3">
                                    <img src={ps} alt="Ps" />
                            </div>
                    </div><div className='rs2'>
                            <div className="border4">
                                    <img src={ci} alt="Ci" />
                            </div>
                    </div><div className='rs3'><div className="border5">
                            <img src={tyre} alt="Tyre" />
                    </div></div><div className='rs4'><div className="border6">
                            <img src={im} alt="Im" />
                    </div></div><div className='rs5'><div className="border7">
                            <img src={i} alt="In" />
                    </div></div><div className='rs6'><div className="border8">
                            <img src={sr} alt="Sr" />
                    </div></div><div className="rs7">Brand Support</div><div className="screen3">
                            <div className="border2">
                                    <img src={brand} alt="Car" />
                            </div>
                            <hr />
                            <hr />
                            <div className="rs8">Why Choose Us?</div>
                            <div className="rs9">
                                    ➡️ WE SERVICE ALL YEARS, MAKES, AND MODELS OF VEHICLES<br />
                                    ➡️ Customer lounge equipped with computer workstation, WIFI, big screen TV, complimentary beverages, clean restrooms, and kid's play area.<br />
                                    ➡️ We offer a 3 year, 36,000 mile warranty<br />
                                    ➡️ Customer shuttle service and loaner cars available<br />
                                    ➡️ We welcome fleet vehicles and extended warranty contracts<br />
                                    ➡️ Service by ASE Certified Technicians<br />
                                    ➡️ FREE 12 MONTH ROADSIDE ASSISTANCE on all work orders over $25</div>
                            <div className="rs10">CARZSPOT Service Guide</div>
                            <div className="rs12">Services Offered
                                    With 20+ workshops present across in India, CarZspot offers affordable car repair and maintenance services such as:<br /></div>
                            <div className="rs11">
                                    •  Car Periodic Services<br />• Car Denting and Painting Services<br />• Car Battery Replacement Services<br />• Car Spa and Cleaning Services<br />• Car AC Service and Repairs<br />• Car Tyre and Wheel care Services</div>
                    </div><div className="rs13">• Car Accessories<br />• Car Custom Repair Services<br />• Car Detailing Services<br />• Car Windshields and Lights Services<br />• Car Clutch and Fitments Services</div><div className="f1">
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
export default Home1;