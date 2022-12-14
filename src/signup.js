import React from 'react';
import './headers.css';
import './footer.css';
import './signup.css';
import { Link } from 'react-router-dom';

function Signup(){
    return (
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
          <Link to='/signup'><input class="signupf" type="submit" value='Sign Up' /></Link>
        </div>
          <form>

            <div class='boxsi'>
            <div class='s1'><h1>SIGN UP</h1></div>
            <h2>Create a new account</h2>
            <div class="inputs">
              <div class="input-containers">
                <input class="input-fields" type="text" placeholder="E-mail Address" required></input>
              </div>
              <br></br>
              <div class="input-containers">
                <input class="input-fields" type="text" placeholder="Create New Password" required></input>
              </div>
              <br></br>
              <div class="input-containers">
                <input class="input-fields" type="text" placeholder="Confirm Password" required></input>
              </div>
            </div>
            <Link to='./register'><input class="buttonc" type="submit" value="Signup" /></Link>
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
          export default Signup;