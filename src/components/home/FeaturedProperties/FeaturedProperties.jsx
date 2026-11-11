
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
} from "lucide-react";

import properties from "../../../data/properties";
import "./FeaturedProperties.css";

const formatPrice = (price) => {
  return `₦${new Intl.NumberFormat("en-NG").format(price)}`;
};

const FeaturedProperties = () => {
  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 6);

  return (
    <section className="featured-section">
      <div className="container">
        <div className="featured-header">
          <div className="featured-heading">
            <span className="section-subtitle">HANDPICKED FOR YOU</span>
            <h2>Featured Properties</h2>
            <p>
              Explore some of our best property listings, carefully selected
              to help you find your next home.
            </p>
          </div>

          <Link to="/properties" className="featured-view-all">
            View All Properties
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProperties.map((property) => (
            <article className="featured-card" key={property.id}>
              <div className="featured-card-image">
                <img
                  src={property.images[0]}
                  alt={property.title}
                />

                <span className="featured-badge">Featured</span>

                <span className={`property-purpose ${property.purpose.toLowerCase()}`}>
                  For {property.purpose}
                </span>
              </div>

              <div className="featured-card-content">
                <div className="featured-location">
                  <MapPin size={15} />
                  <span>
                    {property.location}, {property.city}
                  </span>
                </div>

                <h3>{property.title}</h3>

                <div className="featured-property-type">
                  {property.propertyType}
                </div>

                <div className="featured-property-details">
                  {property.propertyType !== "Land" && (
                    <>
                      <span>
                        <BedDouble size={17} />
                        {property.bedrooms} Beds
                      </span>

                      <span>
                        <Bath size={17} />
                        {property.bathrooms} Baths
                      </span>
                    </>
                  )}

                  <span>
                    <Maximize size={16} />
                    {property.area}
                  </span>
                </div>

                <div className="featured-card-footer">
                  <div className="featured-price">
                    <strong>{formatPrice(property.price)}</strong>
                    <span>
                      {property.priceFrequency === "Yearly"
                        ? "/ year"
                        : ""}
                    </span>
                  </div>

                  <Link
                    to={`/properties/${property.id}`}
                    className="featured-details-link"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
