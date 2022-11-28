export default function Contact(){
    return(
        <>
        <div className="container forma">
    <div className="row">
        <h2 className="main-title text-center">Contact us</h2>
    </div>
    <div className="f-holder">
        <div className="card">
            <form >
                <div className="mt-3 mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text"  id="name" className="form-control" />
                </div>
                <div className="mt-3 mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email"  id="email" className="form-control" />
                </div>
                <div className="mt-3 mb-3">
                    <label for="msg" className="form-label">Message</label>
                    <textarea type="text"  id="msg" className="form-control" rows="5"></textarea>
                </div>
                <button className="btn btn-outline-primary m-3">Send</button>
            </form>
        </div>
    </div>

    <div className="row mt-5">
        <div className="f-holder social">
            <i className='bx bxl-facebook-square'></i>
            <i className='bx bxl-instagram-alt'></i>
            <i className='bx bxl-youtube' ></i>
            <i className='bx bxs-envelope'></i>
            <i className='bx bxl-twitter'></i>
            <i className='bx bxl-snapchat' ></i>
        </div>
    </div>
</div>

        
        
        </>
    )
}