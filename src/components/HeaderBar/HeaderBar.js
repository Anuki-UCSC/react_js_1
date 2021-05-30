import React from 'react';

function HeaderBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item active ml-5">
            <a class="nav-link" href="#">Home </a>
          </li>
          <li class="nav-item ml-5">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item ml-5">
            <a class="nav-link" href="#">Name List</a>
          </li>
        </ul>
      </div>
    </nav>
        );
}

export default HeaderBar;

