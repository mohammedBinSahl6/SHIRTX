import Cart from "./Cart";

export default function Shop(){
    return(
        <>
        
        
<div class="container-fluid py-5 mt-5" id="shop-body">
    <div class="row">
        <div className="f-holder">
        <h1 class="display-2 text-center mt-5">Get Your T-SHIRT NOW !</h1>
        <button class="btn btn-outline-dark float-end cart-btn"  data-bs-toggle="offcanvas" data-bs-target="#CART"><i class='bx bxs-cart-alt'></i></button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="200" width="90%">
                <img src={require("../imgs/t1.png" )}class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3" >ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="400" width="90%">
                <img src={require("../imgs/t2.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3" >ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="600" width="90% ">
                <img src={require("../imgs/t3.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="800" width="90%">
                <img src={require("../imgs/t4.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="200" width="90%">
                <img src={require("../imgs/t5.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="400" width="90%">
                <img src={require("../imgs/t6.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="600" width="90%">
                <img src={require("../imgs/t7.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="800" width="90%">
                <img src={require("../imgs/t8.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="200" width="90%">
                <img src={require("../imgs/t9.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="400" width="90%">
                <img src={require('../imgs/t10.png')}class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="600" width="90%">
                <img src={require("../imgs/t11.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="800" width="90%">
                <img src={require("../imgs/t12.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="200" width="90%">
                <img src={require("../imgs/t13.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="400" width="90%">
                <img src={require("../imgs/t14.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="600" width="90%">
                <img src={require("../imgs/t15.png" )}class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3 py-5">
            <div class="card"  data-aos="flip-right" data-aos-delay="800" width="90%">
                <img src={require("../imgs/t16.png")} class="card-img-top" />
                <div class="card-body">
                    <h3 class="card-title">T-SHIRT PLAZMA</h3>
                    <div class="card-text price">$<span class="price-val">25</span></div>
                    <div class="btns-bar">
                        <button class="btn add-to-cart-btn px-3">ADD TO CART</button>
                        <button class="btn like px-3">
                            <i class='bx bx-heart-circle '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


//CART  
<div class="offcanvas offcanvas-start" id="CART">
   <Cart/>
  </div>

        </>
    )
}