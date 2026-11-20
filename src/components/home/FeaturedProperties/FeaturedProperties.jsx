import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import properties from "../../../data/properties";


import "./FeaturedProperties.css";
import PropertyCard from "../../properties/Properties-Card/PropertyCard";

const FeaturedProperties = () => {
  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 6);

  return (
    <section className="featured-section">
      <div className="container">
        <div className="featured-header">
          <div className="featured-heading">
            <span className="section-subtitle">
              HANDPICKED FOR YOU
            </span>

            <h2>Featured Properties</h2>

            <p>
              Explore some of our best property listings,
              carefully selected to help you find your next home.
            </p>
          </div>

          <Link
            to="/properties"
            className="featured-view-all"
          >
            View All Properties
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;