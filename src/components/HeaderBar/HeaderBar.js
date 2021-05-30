import React from 'react';
import { Link } from 'react-router-dom';

function HeaderBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item active ml-5">
            <Link class="nav-link" to="/">Home </Link>
          </li>
          <li class="nav-item ml-5">
            <Link class="nav-link" to="/about">About Us</Link>
          </li>
          <li class="nav-item ml-5">
            <Link class="nav-link" to="/namelist">Name List</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/namelistC">
            Namelist Class
          </Link>
        </li>
        </ul>
      </div>
    </nav>
        );
}

export default HeaderBar;

