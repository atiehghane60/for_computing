import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><a href="#home"> <img src="images/logo_white.svg" className="logo" alt="" /> </a></div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {[
          { name: "About", id: "about" },
          { name: "Projects", id: "projects" },
          { name: "Technologies", id: "tech" },
          { name: "Services", id: "services" },
          { name: "Team", id: "team" },
          { name: "Publications", id: "publications" },
          { name: "Contact", id: "contact" },
        ].map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
