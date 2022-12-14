import React from "react";
import './utility.css';
import img1 from './img/mobile holder.jpg';
import img2 from './img/wireless charger.jpg';
import img3 from './img/polish.jpg';
import img4 from './img/tyre inflator.jpg';
import img5 from './img/vaccume cleaner.jpg';
import img6 from './img/jumper cables.png';
import img7 from './img/horns.jpg';


function Utility(){
    return(
        <form>
            <div>
                <h2>
                    UTiLITY
                </h2>
            </div>
            <div class="wrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Car GPS Device and Mobile Holder</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-emergency-kits">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper2">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Car Mobile Chargers</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-gps-device-and-mobile-holder">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper3">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Car Polisher</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-chargers">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper4">
    <div class="card"><img src={img4} alt="Img4"/>
        <div class="info">
        <h1>Car Tyre Inflators</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-polisher">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper5">
        <div class="card"><img src={img5} alt="Img5"/>
          <div class="info">
            <h1>Car Vacuum Cleaners</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/tyre-inflators">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper6">    
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Jumper Cables</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-vacuum-cleaner">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper7">
    <div class="card"><img src={img7} alt="Img7"/>
        <div class="info">
        <h1>Car Horns</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/jumper-cable">Buy Now</a>
        </div>
    </div>
  </div>
  
        </form>
    )
}

export default Utility;