import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg "
      style={{ backgroundColor: "#131722" }}
    >
      <div class="container ">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logoUpd.png"
            style={{ width: "20%", borderRadius:"25%",height:"auto" }}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/signup'>
                  Signup
                </Link>
              </li>
              <li class="nav-item ">
              <Link class="nav-link active" aria-current="page" to='/about'>
                  About
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/product'>
                  Product
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/support'>
              support
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/pricing'>
                  Pricing
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;