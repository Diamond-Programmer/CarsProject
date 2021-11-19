import React from "react";
import { NavbarSty } from "./navbarSty";
import logo from "./logo.png";

function Navbar() {
  return (
    <div>
      <a href="https://en.wikipedia.org/wiki/Car">
        <NavbarSty>
          <img src={logo} alt="" />
        </NavbarSty>
      </a>
    </div>
  );
}

export default Navbar;
