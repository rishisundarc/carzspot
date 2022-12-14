import React from "react";
import './lighting.css';
import img1 from './img/fog lamp.jpg';
import img2 from './img/fog lamp.jpg';
import img3 from './img/fog lamp.jpg';
import img4 from './img/fog lamp.jpg';
import img5 from './img/fog lamp.jpg';
import img6 from './img/projector lamp.jpg';
import img7 from './img/pillor light.jpg';
import img8 from './img/light1.jpeg';
import img9 from './img/tail light.jpg';



function Lighting(){
    return(
        <form>
            <div>
                <h2>
                    LIGHTING
                </h2>
            </div>
            <div class="wrapper1">
        <div class="card"><img src={img1} alt="Img1"/>
          <div class="info">
            <h1>Car Decorative Lights</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-decorative-lights">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper2">   
        <div class="card"><img src={img2} alt="Img2"/>
          <div class="info">
            <h1>Car DRL Lights</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-drl-lights">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper3">
    <div class="card"><img src={img3} alt="Img3"/>
        <div class="info">
        <h1>Fog Lights</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-fog-lghts">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper4">
    <div class="card"><img src={img4} alt="Img4"/>
        <div class="info">
        <h1>LED Lights Bulbs</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-hid-lighting">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper5">
        <div class="card"><img src={img5} alt="Img5"/>
          <div class="info">
            <h1>Interior Decorative Lights</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-interior-lights">Buy Now</a>
          </div>
        </div>
      </div>
      <div class="wrapper6">    
        <div class="card"><img src={img6} alt="Img6"/>
          <div class="info">
            <h1>Projector Lamp</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <a href="https://carhatke.com/car-headlight">Buy Now</a>
          </div>
        </div>
    </div>
    <div class="wrapper7">
    <div class="card"><img src={img7} alt="Img7"/>
        <div class="info">
        <h1>Piller Lights</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/car-rear-pillar-cluster-lights">Buy Now</a>
        </div>
    </div>
  </div>
  <div class="wrapper8">
    <div class="card"><img src={img8} alt="Img8"/>
        <div class="info">
        <h1>Reflector Lights</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <a href="https://carhatke.com/back-bumper-reflector-lights">Buy Now</a>
        </div>
    </div>
    </div>
    <div class="wrapper9">
      <div class="card"><img src={img9} alt="Img9"/>
          <div class="info">
          <h1>Tail Lights</h1>
          <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
          <a href="https://carhatke.com/car-tail-lights">Buy Now</a>
          </div>
      </div>
    </div>
    
        </form>
    )
}

export default Lighting;