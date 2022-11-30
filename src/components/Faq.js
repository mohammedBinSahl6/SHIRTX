export default function Faq(){
    return(
        <div className="faq-body">
               
<section className="starter">
    <h3 className="text-center mb-4 pb-2  fw-bold">FAQ</h3>
    <p className="text-center mb-5">
      Find the answers for the most frequently asked questions below
    </p>
  
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
        <h6 className="mb-3 "> A simple
          question?</h6>
        <p>
          Absolutely! We work with top payment companies which guarantees
          your
          safety and
          security. All billing information is stored on our payment processing partner.
        </p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4">
        <h6 className="mb-3 "> A question
          that
          is longer then the previous one?</h6>
        <p>
            You can return clothes at any time.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae, odio maiores a corporis cumque commodi eligendi facere, enim amet consequatur, voluptatum perferendis necessitatibus totam fugit animi qui unde explicabo!
        </p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4">
        <h6 className="mb-3 "> A simple
          question?
        </h6>
        <p>
          Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
          account at any time with no further obligation.
        </p>
      </div>
    </div>
  </section>
        <div className="f-holder ml-27">
  <img src={require("../imgs/faq-pic.png")} />
    </div>

    <section className="section-two">
  <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
        <h6 className="mb-3 "> A simple
          question?
        </h6>
        <p>
          Yes. Go to the billing section of your dashboard and update your payment information.
        </p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4">
        <h6 className="mb-3 "> A simple
          question?
        </h6>
        <p>Unfortunately no. We do not issue full or partial refunds for any
          reason.</p>
      </div>
  
      <div className="col-md-6 col-lg-4 mb-4">
        <h6 className="mb-3 "> Another
          question that is longer than usual</h6>
        <p>
          Of course! We’re happy to offer a free plan to anyone who wants to try our service.
        </p>
      </div>
      </div>
    </section>

<br />


  
<div className="container">
    <h4 className=" text-center mb-4 pb-2  fw-bold">Still have any questions? Contact us to get your answer!</h4>
  <form className="form-faq" >
    
    <div className="form-outline mb-10">
        <label className="form-label" for="form4Example1">Name</label>
      <input type="text" id="form4Example1" className="form-control" />
    </div>
  
    
    <div className="form-outline mb-4">
        <label className="form-label" for="form4Example2">Email address</label>
      <input type="email" id="form4Example2" className="form-control" />
    </div>
  
    
    <div className="form-outline mb-4">
        <label className="form-label" for="form4Example3">Message</label>
      <textarea className="form-control" id="form4Example3" rows="4"></textarea>
    </div>
  
    
  
   
    <button type="submit" className="btn  btn-block mb-4">Send</button>
  </form>
</div>

        </div>
    )
}