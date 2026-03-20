import React, { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  // 🔥 Toggle button
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 🔥 Close after click
  const handleClick = (id) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{ backgroundColor: "orange" }}
    >
      <div className="container-fluid">

        {/* Logo */}
        <img
          src="https://m.media-amazon.com/images/I/51RfbCQMT9L.jpg"
          alt="logo"
          style={{ height: "60px", borderRadius: "50%" }}
        />

        {/* 🔥 Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🔥 Controlled Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-center" style={{ fontSize: "18px" }}>

            <li className="nav-item">
              <button className="nav-link fw-semibold" onClick={() => handleClick("home")}>
                Home
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link fw-semibold" onClick={() => handleClick("about")}>
                About
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link fw-semibold" onClick={() => handleClick("services")}>
                Services
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link fw-semibold" onClick={() => handleClick("contact")}>
                Contact
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;