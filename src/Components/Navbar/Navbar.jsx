import React from "react";
import logo from "../../Assests/Original on Transparent 1.png";
import logo1 from "../../Assests/Monochrome on Transparent 4.png";
import "./Navbar.css";

const Navbar = () => {
  const navbarStyle = {
    fontFamily: "'Poppins', sans-serif",
    padding: 0,
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        style={navbarStyle}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="d-flex flex-column align-items-center">
              <img
                style={{ marginLeft: "35px", marginTop: "7px" }}
                src={logo}
                alt="Your Logo"
                height="10"
                className="d-inline-block align-top"
              />
            </div>
            <img
              style={{ marginLeft: "35px" }}
              src={logo1}
              alt="Your Logo"
              height="13"
              className="d-inline-block align-top img1"
            />
          </a>
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

          <div
            className="collapse navbar-collapse justify-content-center justify-content-lg-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 text-center mx-auto">
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  style={{ fontWeight: "500", color: "#222222" }}
                >
                  About us
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  style={{ fontWeight: "500", color: "#222222" }}
                >
                  Nurses
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  style={{ fontWeight: "500", color: "#222222" }}
                >
                  Practices
                </a>
              </li>
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  style={{ fontWeight: "500", color: "#222222" }}
                >
                  FAQ's
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn responsive-button"
                type="submit"
                style={{
                  backgroundColor: "#AE9C7F",
                  color: "#F3F4F6",
                  padding: "10px 25px",
                  marginRight: "20px",
                  margin: "10px auto", // Center the button in mobile mode
                  borderRadius: "8px",
                }}
              >
                Contact us
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
