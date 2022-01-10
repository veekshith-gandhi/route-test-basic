import React from "react";
import { Link } from "react-router-dom";
const style = {
  textDecoration: "none",
};

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",

        border: "1px solid black",
        padding: "1rem",
        background: "#ccc",
      }}
    >
      <Link style={style} to="/">
        Home
      </Link>
      <Link style={style} to="/about-us">
        About
      </Link>
      <Link style={style} to="/services">
        Services
      </Link>
      <Link style={style} to="/product">
        product
      </Link>
      <Link style={style} to="/contact">
        contact
      </Link>
      <Link style={style} to="/login">
        Login
      </Link>
    </div>
  );
}

export default NavBar;
