
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Home, Building2 } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("Rent");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    const searchParams = new URLSearchParams();

    if (location.trim()) {
      searchParams.set("location", location.trim());
    }

    if (purpose) {
      searchParams.set("purpose", purpose.toLowerCase());
    }

    if (propertyType) {
      searchParams.set("type", propertyType);
    }

    navigate(`/properties?${searchParams.toString()}`);
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-container container">
          <div className="hero-content">
            <span className="hero-tag">
              FIND YOUR PERFECT PLACE
            </span>

            <h1>
              Find a Place You'll Love to <span>Call Home.</span>
            </h1>

            <p className="hero-description">
              Discover comfortable homes, apartments, and properties
              for rent or sale across Nigeria. Your next home is just
              a search away.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>1,200+</strong>
                <span>Properties</span>
              </div>

              <div className="hero-stat">
                <strong>50+</strong>
                <span>Locations</span>
              </div>

              <div className="hero-stat">
                <strong>500+</strong>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>

          <form className="hero-search" onSubmit={handleSearch}>
            <div className="hero-search-header">
              <div>
                <h2>Find Your Property</h2>
                <p>Search available properties in Nigeria</p>
              </div>

              <div className="hero-search-icon">
                <Search size={22} />
              </div>
            </div>

            <div className="hero-search-fields">
              <div className="hero-field">
                <label htmlFor="hero-location">Location</label>

                <div className="hero-input-wrapper">
                  <MapPin size={18} />

                  <input
                    id="hero-location"
                    type="text"
                    placeholder="Enter city or area"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                </div>
              </div>

              <div className="hero-field">
                <label htmlFor="hero-purpose">Purpose</label>

                <div className="hero-input-wrapper">
                  <Home size={18} />

                  <select
                    id="hero-purpose"
                    value={purpose}
                    onChange={(event) => setPurpose(event.target.value)}
                  >
                    <option value="Rent">For Rent</option>
                    <option value="Sale">For Sale</option>
                  </select>
                </div>
              </div>

              <div className="hero-field">
                <label htmlFor="hero-property-type">Property Type</label>

                <div className="hero-input-wrapper">
                  <Building2 size={18} />

                  <select
                    id="hero-property-type"
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                  >
                    <option value="">Any Property</option>
                    <option value="Self Contain">Self Contain</option>
                    <option value="Mini Flat">Mini Flat</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Duplex">Duplex</option>
                    <option value="House">House</option>
                    <option value="Land">Land</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="hero-search-button">
                <Search size={18} />
                Search Properties
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
