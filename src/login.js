import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

import './header.css';
import './footer.css';
function Login(){
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
      <Link to='/login'><input class="Loginf" type="submit" value='Login' /></Link>
      <Link to='/signup'><input class="signupf" type="submit" value='Sign Up' /></Link>
    </div>
    <form>
        <div className='backs1'> 
           <div className='t1'>LOGIN</div>
           <div class="input">
            <div class="input-container">
                <input class="input-field" type="text" placeholder="Username" id="username" required/>
                    </div>
                    <br></br>
            <div class="input-container">
                <input class="input-field" type="password" placeholder="password" id="username" required/>
                    </div>
                    </div>
                    <section class='box'>
  <div>
    <a href='#'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
</section>
                    <Link to='/home'><input class="button" type="submit" /></Link>
                    <Link to ="/forgot"><input class="button1" type="button" value="Forget Password"/></Link> 
                    <Link to='/signup'><div className='t3'>Sign Up</div></Link>
                    <div className='t2'>
                        Don't have account</div>     
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
export default Login;