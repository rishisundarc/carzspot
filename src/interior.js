import React from "react";
import './interior.css';
import img1 from './img/floormat.png';
import img2 from './img/let Step Plate.png';
import img3 from './img/car sunshades.jpg';
import img4 from './img/armrest.jpg';
import img5 from './img/car pedal.jpg';
import img6 from './img/air.jpg';
import img7 from './img/seat cover.jpg';
import img8 from './img/gear knobs.jpeg';
import img9 from './img/chrome.jpg';


function Interior(){
    return(
        <form>
            <div>
                <h2>
                    INTERIOR
                </h2>
            </div>
            <div class="wrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>FloorMat</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-mats">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper2">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Door Scuff Sill Plate</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-foot-step-sill-plate">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper3">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Window Sunshade</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-sunshades">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper4">
    <div class="card"><img src={img4} alt="Img4"/>
        <div class="info">
        <h1>Armrest</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-armrest">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper5">
        <div class="card"><img src={img5} alt="Img5"/>
          <div class="info">
            <h1>Car Pedal Kit</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-pedal-kit">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper6">    
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Perfume</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-perfumes">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper7">
    <div class="card"><img src={img7} alt="Img7"/>
        <div class="info">
        <h1>Seat Cover</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/seat-covers">Buy Now</a>
        </div>
    </div>
  </div>
  <div class="wrapper8">
    <div class="card"><img src={img8} alt="Img8"/>
        <div class="info">
        <h1>Gear Knobs</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/gear-knobs">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper9">
      <div class="card"><img src={img9} alt="Img9"/>
          <div class="info">
          <h1>Seat Cover</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/interior-chrome-accessories">Buy Now</a>
          </div>
      </div>
    </div>
    
      
        </form>
    )
}

export default Interior;