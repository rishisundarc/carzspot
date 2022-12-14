import React from "react";
import {Link} from "react-router-dom" ;
import './category.css';
import img1 from './img/seat cover.jpg';
import img2 from './img/door side.jpg';
import img3 from './img/turn signal.jpg';
import img4 from './img/mobile holder.jpg';
import img5 from './img/Speaker.jpg';
import img6 from './img/brush.jpg';


function Category(){
    return(
        <form>
            <div>
                <h62>
                    CATEGORY
                </h62>
            </div>
            <div class="cwrapper1">
        <div class="ccard"><img src={img1} alt="Img1"/>
          <div class="cinfo">
            <h1>Interior Accessories</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <Link to="/i"><button>Buy Now</button></Link>
          </div>
        </div>
    </div>
    <div class="cwrapper2">   
        <div class="ccard"><img src={img2} alt="Img2"/>
          <div class="cinfo">
            <h1>Exterior Accessories</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <Link to="/e"><button>Buy Now</button></Link>
          </div>
        </div>
    </div>
    <div class="cwrapper3">
    <div class="ccard"><img src={img3} alt="Img3"/>
        <div class="cinfo">
        <h1>Car Lighting Accessories</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <Link to="/l"><button>Buy Now</button></Link>
        </div>
    </div>
    </div>
    <div class="cwrapper4">
    <div class="ccard"><img src={img4} alt="Img4"/>
        <div class="cinfo">
        <h1>Car Utility Accessories</h1>
        <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
        <Link to="/u"><button>Buy Now</button></Link>
        </div>
    </div>
    </div>
    <div class="cwrapper5">
        <div class="ccard"><img src={img5} alt="Img5"/>
          <div class="cinfo">
            <h1>Car Electronic Accessories</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <Link to="/el"><button>Buy Now</button></Link>
          </div>
        </div>
      </div>
      <div class="cwrapper6">    
        <div class="ccard"><img src={img6} alt="Img6"/>
          <div class="cinfo">
            <h1>Car Care and Styling</h1>
            <p>we are in Partnership with carhatke. You can buy quality car accessories @ lowest price.</p>
            <Link to="/c"><button>Buy Now</button></Link>
          </div>
        </div>
    </div>
        </form>
    )
}

export default Category;