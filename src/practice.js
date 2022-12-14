import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';
import './header.css';
import './footer.css';
function Register()
{
    return(
        <>
       <div className='n1'>
      <div className='contactf'>Contact Us</div>
      <div className='emailf'>E-Mail : carzspot@gmail.Conform</div>
      <div className='phonef'>Phone : 769590305</div>
    </div>
    <div className='n2'>
      <div className='t'>CARZSPOT</div>
      <div className='h1'>Home</div>
      <Link to='/about'><div className='h2'>About Us</div></Link>
      <div className='h3'>Help</div>
      <div className='h4'>Accessories</div>
      <div className='h5'>Service</div>
      <div className='h6'>Remainder</div>
      <Link to='/feedback'><div className='h7'>FeedBack</div></Link>
      <div className='h8'>Contact Us</div>
      <div className='h9'>Account</div>
      <Link to='/login'><input class="Loginf" type="button" value='Logout' /></Link>
    </div>
        <form>
            <div class='submain'></div>
                <div class='r1'><h1>Registration</h1></div>
                <div class='input'>
                    <div class='input-container'>
                        <input class="input-field" type="text" placeholder="Name" id="name" required></input> </div></div>
                <div class='inputs'>
                    <div class='inputs-container'>
                        <input class="inputs-field" type="text" placeholder="Mobile No" id="name" required></input> </div></div>
                <div class='input1'>
                    <div class='input1-container'>
                        <input class="input1-field" type="text" placeholder="Email Address" id="name" required></input> </div></div>
                <div class='r2'><h1>Vehicle Details</h1></div>
                <div class='input2'>
                    <div class='input2-container'>
                        <input class="input2-field" type="text" placeholder="Brand" id="name" required></input> </div></div>
                <div class='input3'>
                    <div class='input3-container'>
                        <input class="input3-field" type="text" placeholder="Model" id="name" required></input> </div></div>
                <div class='input4'>
                    <div class='input4-container'>
                        <input class="input4-field" type="text" placeholder="Register No" id="name" required></input> </div></div><br></br><br></br>
                <div><input class="b" type='submit' value="Submit"></input></div>
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
export default Register;
