export default function Navbar(){
    return(
           
<nav className="navbar navbar-expand-sm navbar-light fixed-top">
    
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html">
        <img className="logo" width="90" src={require("../imgs/LOGO.png")} />
    </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <i className='bx bx-menu-alt-right'></i>
        </button> 
        <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="comments.html">Comments</a>
              </li>
            </ul>
          </div>

      </div>

   
  
    
  
</nav>
    )
}