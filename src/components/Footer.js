import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
                
<footer className="text-center text-lg-start bg-white text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span className="display-6">Get connected with us</span>
    </div>
  

    
    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
    
  </section>


 
  <section className="">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">
    
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h5 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>SHIRTX
          </h5>
          <p>
            Here you can Find Your T-SHIRT
          </p>
          <a className="navbar-brand" href="index.html">
            <img className="logo" width="100" src={require("../imgs/LOGO.png")} />
        </a>
        </div>
       

      
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h5 className="text-uppercase fw-bold mb-4">
            Products
          </h5>
          <p>
            <a href="shop.html" className="text-reset">T-Shirt</a>
          </p>
          <p>
            <a href="shop.html" className="text-reset">Panties</a>
          </p>
          <p>
            <a href="shop.html" className="text-reset">Shoes</a>
          </p>
          <p>
            <a href="#!" className="text-reset"></a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h5 className="text-uppercase fw-bold mb-4">
            Useful links
          </h5>
          <p>
            <a href="shop.html" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="contact.html" className="text-reset">Order</a>
          </p>
          <p>
            <Link to='/faq' className="text-reset">Help</Link>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
          <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            SHIRTX123@GMAIL.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>
   
  
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    © 2022 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">SHIRTX.com</a>
  </div>
 
</footer>
 
        
        
        </>
    )
}