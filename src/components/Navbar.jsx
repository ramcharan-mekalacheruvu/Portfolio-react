import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const navItems = [
    {
      label: "About",
      id: "about",
    },
    {
      label: "Skills",
      id: "skills",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Education",
      id: "education",
    },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}

        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <span>RC</span>
        </button>

        {/* DESKTOP NAVIGATION */}

        <nav
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              {item.label}
            </button>
          ))}

          <button
            className="nav-hire"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Hire me
            <ArrowUpRight size={14} />
          </button>
        </nav>

        {/* MOBILE MENU */}

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>
    </header>
  );
}

export default Navbar;