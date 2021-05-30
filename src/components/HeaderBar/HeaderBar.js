import React from 'react';

function HeaderBar() {
    return (
        <div class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <ul>
          <li className="nav-item"><a className="nav-link" href="#">Welcome</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Name list</a></li>
        </ul>
      </div>
        );
}

export default HeaderBar;

