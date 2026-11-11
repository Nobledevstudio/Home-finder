import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">H</span>
          <span className="logo-text">
            HomeFinder
          </span>
        </Link>

        {/* Navigation */}
        <nav className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Authentication */}
          <div className="mobile-auth-actions">
            <Link
              to="/login"
              className="mobile-login-link"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="navbar-signup mobile-signup"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Desktop Authentication */}
        <div className="navbar-actions">
          <Link to="/login" className="navbar-login">
            Login
          </Link>

          <Link to="/signup" className="navbar-signup">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
