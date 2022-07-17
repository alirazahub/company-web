import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          
        

    <nav className="navbar navbar-expand-lg nav_bg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="/"> <span className='brand_title'> Ali's </span> Project</NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink exact activeClassName='active_link' className="nav-link" to="/">Home</NavLink >
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='active_link' className="nav-link" to="/about">About</NavLink >
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='active_link' className="nav-link" to="/services">Service</NavLink >
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='active_link' className="nav-link" to="/contact">Contact</NavLink >
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
      </div>
    </div>


    </>
  );
}

export default Header;