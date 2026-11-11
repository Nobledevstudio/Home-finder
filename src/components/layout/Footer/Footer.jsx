import { Link } from "react-router-dom";

import {
    ArrowUpRight,
    MapPin,
    Phone,
    Mail,
    House,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const propertyTypes = [
        "Self Contain",
        "Mini Flat",
        "Apartment",
        "Duplex",
        "House",
        "Land",
    ];

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Properties", path: "/properties" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="footer-logo-icon">
                                <House size={23} />
                            </span>
                            <span>
                                Home<span>Finder</span>
                            </span>
                        </Link>

                        <p className="footer-description">
                            Finding your next home should be simple.
                            HomeFinder helps you discover properties
                            that match your lifestyle, location, and budget.
                        </p>
                        <div className="footer-socials">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3>Quick Links</h3>

                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path}>
                                        {link.name}
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Property Types */}
                    <div className="footer-column">
                        <h3>Property Types</h3>

                        <ul>
                            {propertyTypes.map((type) => (
                                <li key={type}>
                                    <Link
                                        to={`/properties?propertyType=${encodeURIComponent(type)}`}
                                    >
                                        {type}
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column footer-contact">
                        <h3>Contact Us</h3>

                        <div className="footer-contact-item">
                            <MapPin size={18} />
                            <span>Lagos, Nigeria</span>
                        </div>

                        <div className="footer-contact-item">
                            <Phone size={18} />
                            <a href="tel:+2348000000000">
                                +234 800 000 0000
                            </a>
                        </div>

                        <div className="footer-contact-item">
                            <Mail size={18} />
                            <a href="mailto:info@homefinder.com">
                                info@homefinder.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <p>
                        © {currentYear} HomeFinder. All rights reserved.
                    </p>

                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
