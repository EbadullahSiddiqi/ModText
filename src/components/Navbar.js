import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Props are values we pass to Components that can be used in different areas
// propType says that the props can only be of the one type that is defined by us
export default function Navbar(props) {
  const textStyle = {
    color: props.mode === "dark" ? "white" : "black",
  };

  const navStyle = {
    backgroundColor: props.mode === "dark" ? "#051424" : "light",
  };

  const btnStyle = {
    backgroundColor: props.mode === "dark" ? "white" : "#051424",
    color: props.mode === "dark" ? "#051424" : "white",
    border: "none"
  }

  return (
    //#051424
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand logo-heading" to="/" style={textStyle}>
             <h4> &lt;ModText&gt; </h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link " to="/about" style={textStyle}>
                  About
                </Link>
              </li>
            </ul>
            <button className="btn btn-primary" onClick={props.changeTheme} style={btnStyle}>
              Change Theme
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
