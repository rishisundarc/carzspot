import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';
function Register()
{
    return(
        <>
        <div className='body1'></div>
        <form>
            <div class='submainr'>
                </div>
                <div class='r1'>Registration</div>
                <div class='inputr'>
                    <div class='input-containerr'>
                        <input class="input-fieldr" type="text" placeholder="Name" id="name" required></input> </div></div>
                <div class='input5'>
                    <div class='input5-container'>
                        <input class="input5-field" type="text" placeholder="Mobile No" id="name" required></input> </div></div>
                <div class='input1'>
                    <div class='input1-container'>
                        <input class="input1-field" type="text" placeholder="Email Address" id="name" required></input> </div></div>
                <div class='r2'>Vehicle Details</div>
                <div class='input2'>
                    <div class='input2-container'>
                        <input class="input2-field" type="text" placeholder="Brand" id="name" required></input> </div></div>
                <div class='input3'>
                    <div class='input3-container'>
                        <input class="input3-field" type="text" placeholder="Model" id="name" required></input> </div></div>
                <div class='input4'>
                    <div class='input4-container'>
                        <input class="input4-field" type="text" placeholder="Register No" id="name" required></input> </div></div><br></br><br></br>
                <div><input class="bs" type='submit' value="Submit"></input></div>
        </form>
    </>
    );
}
export default Register;
