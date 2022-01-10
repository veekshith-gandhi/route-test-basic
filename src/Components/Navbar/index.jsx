import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">contact</Link>
      <Link to="/login">Login</Link>
    </>
  );
}

export default NavBar;
