/*shimon kaldearo 318643368
  chen yakov 209382779*/

import React from 'react';
import './form.css';
import './navbar.css';

//code of our navigtion bar
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/*sending the user to the desire page */}
        <a className="nav-item nav-link" href="/">HOME</a>
        <a className="nav-item nav-link" href="/dashboard">DASHBOARD</a>
      </div>
    </div>
  </nav>
    );
  };
  
export default Navbar;
