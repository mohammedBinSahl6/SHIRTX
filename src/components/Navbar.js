import {  NavLink } from "react-router-dom";

export default function Navbar(){
    return(
           
<nav className="navbar navbar-expand-sm navbar-light fixed-top">
    
    <div className="container-fluid">
      <a  className="navbar-brand" href="/" >
        <img className="logo" width="90" src={require("../imgs/LOGO.png")} />
    </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <i className='bx bx-menu-alt-right'></i>
        </button> 
        <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link"  to='/about' activeClassName='navbar__link--active'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to='contact' activeClassName='navbar__link--active'>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/comments" activeClassName='navbar__link--active'>Comments</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/shop" activeClassName='navbar__link--active'>Store</NavLink>
              </li>
            </ul>
          </div>

      </div>

   
  
    
  
</nav>
    )
}