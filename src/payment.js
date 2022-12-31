import React from "react";
import { Link } from "react-router-dom";
import './payment.css';
import './header.css';
import './footer.css';
import cs from './carzspot1.png';
function Payment()
{
    return(
    <><><><div className='n1'>
        </div><div className='n2'>
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
            <div class="header12">
                <div class="header12-inner">
                    <div class="menu">PAYMENT TYPES</div>
                </div>

            </div>
            <div class="heading">
                <h31>Order Review</h31>

                <div class="grid-container">
                    <div class="label-cell label-cell-left Label-1"><label class="base-label">Name</label></div>
                    <div class="label-cell  Text-1"><p class="order-details">Peroidic Service</p></div>
                    <div class="label-cell label-cell-left Label-2"><label class="base-label">Email Address</label></div>
                    <div class="label-cell Text-2"><p class="order-details">josie.wellington346@gmail.com</p></div>
                    <div class="label-cell label-cell-left Label-3"><label class="base-label">Program Start</label></div>
                    <div class="label-cell Text-3"><p class="order-details">August 1, 2022</p></div>
                    <div class="label-cell label-cell-left Label-4 bottom-border"><label class="base-label">Program End</label></div>
                    <div class="label-cell Text-4 bottom-border"><p class="order-details">October 31, 2022</p></div>
                </div>
                <label class="base-label margin-40">Order Details</label>
                <ul class="leaders">
                    <li class="margin-20"><span>2 month&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Core Cleaning</span>
                        <span>$15.00</span></li>
                    <li class="margin-20"><span>2 month&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service</span>
                        <span>$5.00</span></li>
                    <li class="margin-40"><strong><span>Total</span>
                        <span>$20.00</span></strong></li>
                </ul>
                
                <h3 class="margin-40">Payment</h3>
	<form action="/action_page.php">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
		<label for="vehicle1"> <strong>By checking this box, you agree that your debit/credit card will be charged $20.00.</strong><br/><br/>
You also agree that, unless you are removed from the program before the program end date, your subscription will automatically renew and you authorize us to continue to charge your debit/credit card $20.00 monthly (until removed from the program). Once charged, all purchases, including renewals, are non-refundable.</label>
			
		</form>
</div>
<div class="margin-40">
	
<div class="card1">
	<div class="three-column">
		<div>
	<label class="base-label">Card on File</label>
	XXXX-XXXX-XXXX-1234
		</div>
		<div>
	<label class="base-label">Expiration</label>
	01/23
		</div>
		<div class="mc"><label class="base-label">Card Type</label>
			<img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png"/></div>
	</div>
	<Link to='/you'><input type="button" value="Pay with this card" class="button"></input></Link>
</div>	
<div class="card1" >
	<div className="margin-top:40px">
    <label class="base-label">Name</label>
	<input class="base-input" id="_905815077" type="text" name="client_id" placeholder="" value=""/>
	<label class="base-label">Card Number</label>
	<input class="base-input input-cc-icon" id="_905815077" type="text" name="client_id" placeholder="" value=""/>
	<label class="base-label">Expiration</label>
	<input class="base-input" id="_905815077" type="text" name="client_id" placeholder="" value=""/>
	<label class="base-label">CVC</label>
	<input class="base-input" id="_905815077" type="text" name="client_id" placeholder="" value=""/>
	<input type="button" value="Pay Now" class="button"></input>

    </div>

</div>



	

            </div>
        </>

        </><div className="fde1">
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
                export default Payment;
	