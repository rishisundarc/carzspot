import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import './homehead.css';
import './footer.css';
import brand from './brand.png';
import homes from './homes.png';
function Home(){
    return(
        <>
        <div className="bg"></div>
        <div className="bg1"></div>
         <div className='n1'>
      <div className='contactf'>Contact Us</div>
      <div className='emailf'>E-Mail : carzspot@gmail.Conform</div>
      <div className='phonef'>Phone : 769590305</div>
    </div>
    <div className='n2'>
      <div className='t'>CARZSPOT</div>
      <div className='h1'>Home</div>
      <Link to='/about'><div className='h2'>About Us</div></Link>
      <Link to='/help'><div className='h3'>Help</div></Link>
      <Link to='/ca'><div className='h4'>Accessories</div></Link>
      <Link to='/service'><div className='h5'>Service</div></Link>
      <div className='h6'>Remainder</div>
      <Link to='/feedback'><div className='h7'>FeedBack</div></Link>
      <div className='h8'>Contact Us</div>
      <div className='h9'>Account</div>
      <Link to='/login'><input class="Loginf" type="button" value='Login' /></Link>
      <Link to='/signup'><input class="signupf" type="submit" value='Sign Up' /></Link>
    </div>
    <div>
    <div className="screen2">
    <div className="border1">

                <img src={homes} alt="Home"/>
                <div className="rishi">QUALITY CAR<br />ASSISTANCE</div>
                <div className="sundar"></div>
                </div>
                </div>
                
        </div>
        </>
    );
}
export default Home;