import React from "react";
import './Care and Styling.css';
import img1 from './img/blind mirror.jpg';
import img2 from './img/brush.jpg';
import img3 from './img/car care kit.jpg';
import img4 from './img/blind mirror.jpg';
import img5 from './img/key cover.jpg';
import img6 from './img/wax.jpg';
import img7 from './img/scratch remover.jpg';
import img8 from './img/shampoo.jpg';
import img9 from './img/tyre dresser.jpg';
import img10 from './img/repair kit.jpg';
import img11 from './img/tyre lock.jpg';



function CAS(){
    return(
        <form>
            <div>
                <h72>
                    Care and Styling
                </h72>
            </div>
            <div class="wrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Blind Spot Mirror</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-blind-spot-mirror">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper2">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Cleaning cloth</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-cleaning-cloth-towel-softspun">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper3">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Car Cleaning Kit</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-cleaning-kit">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper4">
    <div class="card"><img src={img4} alt="Img4"/>
        <div class="info">
        <h1>Exhaust Tip Muffler</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-exhaust-tip-silencer-cover-tube-muffler">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper5">
        <div class="card"><img src={img5} alt="Img5"/>
          <div class="info">
            <h1>Key Covers</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-key-cover">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper6">    
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Polish and Wax</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-polish-wax-liquid">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper7">
    <div class="card"><img src={img7} alt="Img7"/>
        <div class="info">
        <h1>Scratch Remover</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-scratch-remover">Buy Now</a>
        </div>
    </div>
  </div>
  <div class="wrapper8">
    <div class="card"><img src={img8} alt="Img8"/>
        <div class="info">
        <h1>Shampoo</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-shampoo">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper9">
      <div class="card"><img src={img9} alt="Img9"/>
          <div class="info">
          <h1>Tyre Polish Dresser</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/car-tyre-polish-dresser">Buy Now</a>
          </div>
      </div>
    </div>
    <div class="wrapper10">
      <div class="card"><img src={img10} alt="Img10"/>
          <div class="info">
          <h1>Tyre Puncture Kit</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/tyre-puncture-kit">Buy Now</a>
          </div>
      </div>
      </div>
      <div class="wrapper11">
        <div class="card"><img src={img11} alt="Img11"/>
            <div class="info">
            <h1>Tyre Wheel Lock</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-tyre-wheel-lock">Buy Now</a>
            </div>
        </div>
      </div>
      
        </form>
    )
}

export default CAS;