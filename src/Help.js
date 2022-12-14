import React from 'react';
import { Link } from 'react-router-dom';
import './Help.css';
import './header.css';
import './footer.css';
function Help(){
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
      <Link to='/login'><input class="Loginf" type="button" value='Logout' /></Link>
    </div>
        <form>
            <div class='body'></div>
            <div class='box1H'>OUR CONTACT NUMBER<br/>
+91-9360150789 <br/></div>
            <div class='box2H'>OUR CORPORATE OFFICE<br/>
Carzspott Motor Works pvt ltd<br/>3A ,VASU Street, Shreena Avenue, Tanu Towers, <br/>Coimbatore <br/>Tamil Nadu<br/>627002</div>
            <div class='box3H'>Email:contact.carzspot@gmail.com<br/>Instagram:carz_spot_<br/>Twitter:CarZspot<br/>Facebook:Carzspot </div>
                <div className='boxhe'>
                <div class='head2'> <h1>Enquiry Form</h1></div>
                <div class='inputH'>
                <div class="input-containerH">
            <input class="input-fieldH" type="text" placeholder="Name" required></input>
          </div>
          <br></br>
          <div class="input-containerH">
            <input class="input-fieldH" type="text" placeholder="Contact Number" required></input>
          </div>
          <br></br>
          <div class='inputHE'>
            <div class="input-containerHE">
                <input class="input-fieldHE" type="text" placeholder="E-mail" required></input>
                </div>
                </div>
                <br></br>
                <div class='inputHE'>
                <div class="input-containerHE">
                <input class="input-fieldHE" type="text" placeholder="Car Model" required></input>
                </div>
                </div>
                <br></br>
                <div class='inputHEL'>
                <div class="input-containerHEL">
                <input class="input-fieldHEL" type="text" placeholder="City (or) State" required></input>
                </div>
                </div>
                <br></br>
                <div class='inputHEL'>
                <div class="input-containerHEL">
                <input class="input-fieldHEL" type="text" placeholder="Car Variant" required></input>
                </div>
                </div>
                <br></br>
                <div class='inputHELP'>
                <div class="input-containerHELP">
                <input class="input-fieldHELP" type="text" placeholder="Enter Description" required></input>
                </div>
                </div>
          </div>
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
export default Help;