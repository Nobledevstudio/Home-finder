import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
} from "lucide-react";

import "./PropertyCard.css";

const formatPrice = (price) => {
  return `₦${new Intl.NumberFormat("en-NG").format(price)}`;
};

const PropertyCard = ({ property }) => {
  return (
    <article className="featured-card">
      <div className="featured-card-image">
        <img
          src={property.images[0]}
          alt={property.title}
        />

        {property.featured && (
          <span className="featured-badge">Featured</span>
        )}

        <span
          className={`property-purpose ${property.purpose.toLowerCase()}`}
        >
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
  );
};

export default PropertyCard;