import React from "react";
import './electronics.css';
import img1 from './img/light1.jpeg';
import img2 from './img/Speaker.jpg';
import img3 from './img/Speaker.jpg';
import img4 from './img/Smart Stereo.png';
import img5 from './img/Screen.jpeg';
import img6 from './img/wheel control.jpg';
import img7 from './img/Camera.jpeg';


function Electronics(){
    return(
        <form>
            <div>
                <h72>
                    ELECTRONICS
                </h72>
            </div>
            <div class="wrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Security System</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-security-system">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper2">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Amplifier</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-amplifier-for-car-audio-system">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper3">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Bass Tube Woofers</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-sub-woofer-base-tube-car-audio-system">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper4">
    <div class="card"><img src={img4} alt="Img4"/>
        <div class="info">
        <h1>Smart Stereo</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-rear-view-monitor">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper5">
        <div class="card"><img src={img5} alt="Img5"/>
          <div class="info">
            <h1>Rear View Monito</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-steering-wheel-control-button">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper6">    
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Steering Wheel Controler</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/reverse-parking-sensors-and-reverse-camera">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper7">
    <div class="card"><img src={img7} alt="Img7"/>
        <div class="info">
        <h1>Sensors & Camera</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-android-infotainment-system">Buy Now</a>
        </div>
    </div>
  </div>
  
        </form>
    )
}

export default Electronics;