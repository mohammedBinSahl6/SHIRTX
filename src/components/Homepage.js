export default function Homepage(){
    return(
        <>
        
<div className="land " >
  <div className="f-holder">
    <img src={require("../imgs/LOGO.png")} className="logo-land" />
    <div className="row">
        
        <div className="row">
            <h1 className="display-1 text-center p-5" data-aos="fade-up" data-aos-duration="2000">SHIRTX</h1>
        </div>
       <div className="row">
        <p className="des text-center "  data-aos="fade-up" data-aos-duration="2000"data-aos-delay='500'>Welcome to our Store</p>
       </div>
       <div className="row py-5">
        <div className="f-holder py-5">
          <a className="btn btn-outline-light shop-now-btn" href="shop.html"  data-aos="fade-up" data-aos-duration="2000"data-aos-delay='1000'>Shop Now</a>
        </div>
      </div>
    </div>
  
   
  </div>
</div>

<div className="container-fluid text-white" id="about-store">
  <div className="row py-5">
    <h1 className="display-2 text-center">SHIRTX Store is the Best</h1>
  </div>

  <div className="row ">
    <div className="col-lg-6 p-5">
        <h4 className=" display-4 text-center">The Quality</h4>
        <img src={require("../imgs/cotton.jpg")} className="img-thumbnail" />
    </div>
    <div className="col-lg-6 p-5">
      <p className="p-5">      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam incidunt accusantium voluptate soluta expedita quia dolor tempora nam, doloremque quas dolore maxime numquam est eaque deserunt obcaecati, alias ex nesciunt!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui est numquam a deleniti aspernatur quisquam! Ex, harum commodi modi officia quaerat assumenda doloremque libero, maiores animi laboriosam quas facilis nisi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque similique rerum. Praesentium, quidem. Quos, nulla tempora. Dolores nihil reprehenderit mollitia aliquid omnis, dolorum, veniam rem, unde animi ipsam corporis?
      </p>
    </div>
  </div>

</div>
<div className="container-fluid pt-5" id="par1">
  <div className="row">
    <div className="col-lg-6 p-5">
      <img src={require("../imgs/perfect.jpg")} className="img-thumbnail" data-aos="zoom-in-up" />
    </div>
    <div className="col-lg-6 p-5" data-aos="zoom-in-up">
      <h2 className="text-center">With Perfect Size</h2>
      <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quibusdam tenetur inventore? Ratione nihil suscipit eius quod? Dicta dolorem porro vitae, labore ab, alias explicabo rem soluta atque possimus veniam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius quis quod, porro officiis ratione qui dignissimos quas cumque tempore est facilis ad aliquam eos dolore perferendis libero dolor quasi!
      </p>

      <div className="mt-4 p-5 bg-dark text-white" data-aos="zoom-in-right">
        <h2> % Get offer on XXXL Sizes</h2>
        <p>Now ! we will give a big offer suits you for XXXL sizes</p>
        <a className="btn btn-light" href="shop.html">Check The Store</a>
      </div>
      <div className="mt-4 p-5 bg-primary text-white" data-aos="zoom-in-left">
        <h2>Do you have any comments ?</h2>
        <p>You can give us your feedback !</p>
        <a className="btn btn-dark" href="comments.html">Here</a>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid pt-5 text-white" id="par2">
  <div className="row">
    <div className="col-lg-8 p-5">
      <img src={require("../imgs/2022.jpg")} className="img-2022" data-aos="zoom-in-up" />
    </div>
    <div className="col-lg-4 p-5" data-aos="zoom-in-up">
      <h1 className="text-center">Brands 2022 !</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, similique inventore expedita quia doloribus eos a repellendus iusto doloremque impedit quas est minima architecto, facilis soluta quisquam quaerat, molestiae maxime?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia dolores iste explicabo. Vitae provident molestiae laboriosam, dolorum blanditiis ipsa, unde optio, sed sapiente fugit suscipit ullam temporibus facere aperiam!Lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aperiam, hic autem nisi amet obcaecati, blanditiis mollitia fuga nostrum rem esse numquam ducimus! Beatae cumque ullam eligendi modi. Qui, voluptates!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ipsa expedita porro aut temporibus vero ullam neque in, vitae magnam beatae error deleniti dicta. Eligendi, deleniti eum! Ipsam, obcaecati officia?

      </p>
    </div>
  </div>
</div>

<div className="down container-fluid pt-5" id="par3">
  <div className="row">
    <div className="col-lg-6 p-5" data-aos="zoom-in-up">
      <h1 className="text-center">With us ! Be confedient</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magni enim nulla laudantium commodi? Ipsa, distinctio labore itaque expedita quos, officiis enim consequuntur quibusdam animi quaerat quisquam veniam maiores ipsam?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure velit sint numquam et excepturi, ex dignissimos dolor provident exercitationem ipsum aut deleniti placeat obcaecati, quo eveniet ab neque. Quae, ab?

      </p>
    </div>
    <div className="col-lg-6 p-5">
      <img src={require("../imgs/confdent.webp")} className="img-thumbnail" data-aos="zoom-in-up" />
    </div>
  </div>

<div class="subscribe">
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <input type="submit" value="Subscribe" />
          </form>        
          </div>       
</div>
        </>
    )
}