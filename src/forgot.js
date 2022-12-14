import React from 'react';
import { Link } from 'react-router-dom';
import './forgot.css';
import './header.css';
import './footer.css';
function Forgot(){
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
      <Link to ='/about'><div className='h2'>About Us</div></Link>
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
    <form> 
    <div className='boxf'>
           <div className='f'>Forget Password</div>
           <div class="inputf">
            <div class="input-containerf">
                <input class="input-fieldf" type="text" placeholder="Username" id="username" required/>
    
                    </div>
                    <br></br>
            <div class="input-containerf">
                <input class="input-fieldf" type="password" placeholder="Create Password" id="username" required/>
                    </div>
                    <br/>
            <div class="input-containerf">
                <input class="input-fieldf" type="password" placeholder="Conform Password" id="username" required/>
  
                    </div>
                    </div>
  <div>
    <a href='#'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
                    <Link to ='/login'><input class="submitf" type="submit" /></Link>
    </div>
    </form>
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
export default Forgot;