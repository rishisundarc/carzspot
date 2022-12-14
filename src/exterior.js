import React from "react";
import './exterior.css';
import img1 from './img/cover.jpg';
import img2 from './img/window chrome.jpg';
import img3 from './img/Car Bumper Guards.png';
import img5 from './img/door guard.jpg';
import img6 from './img/door handle.jpg';
import img7 from './img/front grill.jpg';
import img8 from './img/roof rail.jpg';
import img9 from './img/door side.jpg';
import img10 from './img/mirror.jpg';
import img11 from './img/chrome letter.jpg';
import img12 from './img/door visor.jpg';


function Exterior(){
    return(
        <form>
            <div>
                <h2>
                    EXTERIOR
                </h2>
            </div>
            <div class="wrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Body Covers</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/body-covers">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper2">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Chrome Window Trim Garnish</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-window-trim-garnish">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper3">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Car Bumper Guards</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/rear-bumper-diffuser">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper4">
    <div class="card"><img src={img5} alt="Img5"/>
        <div class="info">
        <h1>Door Guards</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-door-guards">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper5">
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Door Handle Latch Covers</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-handle-door-latch-covers">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper6">    
        <div class="card"><img src={img7} alt="Img7"/>
          <div class="info">
            <h1>Front Grills</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-front-grills">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper7">
    <div class="card"><img src={img8} alt="Img8"/>
        <div class="info">
        <h1>Roof Rails</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-roof-rails">Buy Now</a>
        </div>
    </div>
  </div>
  <div class="wrapper8">
    <div class="card"><img src={img9} alt="Img9"/>
        <div class="info">
        <h1>Side Beadings</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-beading">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper9">
      <div class="card"><img src={img10} alt="Img10"/>
          <div class="info">
          <h1>Side Mirror Covers</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/car-mirror-covers">Buy Now</a>
          </div>
      </div>
    </div>
    <div class="wrapper10">
      <div class="card"><img src={img11} alt="Img12"/>
          <div class="info">
          <h1>Stickers & Decals</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/car-stickers-and-decals">Buy Now</a>
          </div>
      </div>
      </div>
      <div class="wrapper11">
        <div class="card"><img src={img12} alt="Img12"/>
            <div class="info">
            <h1>Car Window Door Visors</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/window-door-visor">Buy Now</a>
            </div>
        </div>
      </div>
      
        </form>
    )
}

export default Exterior;