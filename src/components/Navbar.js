import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar has-shadow is-primary is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img
              src={process.env.PUBLIC_URL+"personal_white.svg"}
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Engineering</a>
            <a className="navbar-item">Projects</a>
            <a className="navbar-item">Design</a>
            <a className="navbar-item">Contact</a>

          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
