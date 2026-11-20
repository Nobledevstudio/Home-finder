import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    MapPin,
    BedDouble,
    Bath,
    Toilet,
    Maximize,
    CheckCircle,
} from "lucide-react";

import properties from "../../data/properties";
import PropertyGallery from "../../components/property-details/PropertyGallery/PropertyGallery";
import InspectionRequestForm from "../../components/property-details/InspectionRequestForm/InspectionRequestForm";

import "./PropertyDetails.css";

const PropertyDetails = () => {
    const { id } = useParams();

    const property = properties.find(
        (item) => String(item.id) === id
    );

    if (!property) {
        return (
            <div className="container property-not-found">
                <h2>Property not found</h2>
                <p>The property you are looking for does not exist.</p>

                <Link to="/properties">
                    Back to Properties
                </Link>
            </div>
        );
    }

    const formattedPrice = `₦${property.price.toLocaleString("en-NG")}`;

    return (
        <section className="property-details-page">
            <div className="container">
                {/* Back Link */}
                <Link to="/properties" className="property-back-link">
                    <ArrowLeft size={18} />
                    Back to Properties
                </Link>

                {/* Property Header */}
                <div className="property-details-header">
                    <div>
                        <div className="property-details-badges">
                            <span className="details-purpose">
                                For {property.purpose}
                            </span>

                            <span className="details-type">
                                {property.propertyType}
                            </span>
                        </div>

                        <h1>{property.title}</h1>

                        <div className="property-details-location">
                            <MapPin size={18} />

                            <span>
                                {property.location}, {property.city}
                            </span>
                        </div>
                    </div>

                    <div className="property-details-price">
                        <h2>{formattedPrice}</h2>

                        {property.priceFrequency === "Yearly" && (
                            <span>Per year</span>
                        )}
                    </div>
                </div>

                {/* Property Gallery */}
                <PropertyGallery
                    key={property.id}
                    images={property.images}
                    title={property.title}
                />

                {/* Property Content */}
                <div className="property-details-layout">
                    <div className="property-main-content">
                        {/* Property Overview */}
                        <div className="property-details-section">
                            <h2>Property Overview</h2>

                            <div className="property-overview">

                                {property.propertyType !== "Land" && (
                                    <>
                                        <div className="overview-item">
                                            <BedDouble size={24} />
                                            <strong>{property.bedrooms}</strong>
                                            <span>Bedrooms</span>
                                        </div>

                                        <div className="overview-item">
                                            <Bath size={24} />
                                            <strong>{property.bathrooms}</strong>
                                            <span>Bathrooms</span>
                                        </div>

                                        <div className="overview-item">
                                            <Toilet size={24} />
                                            <strong>{property.toilets}</strong>
                                            <span>Toilets</span>
                                        </div>
                                    </>
                                )}

                                <div className="overview-item">
                                    <Maximize size={24} />
                                    <strong>{property.area}</strong>
                                    <span>Area</span>
                                </div>

                            </div>
                        </div>

                        {/* Description */}
                        <div className="property-details-section">
                            <h2>Property Description</h2>

                            <p>{property.description}</p>
                        </div>

                        {/* Amenities */}
                        <div className="property-details-section">
                            <h2>Property Amenities</h2>

                            <div className="property-amenities">
                                {property.amenities.map((amenity) => (
                                    <div
                                        className="amenity-item"
                                        key={amenity}
                                    >
                                        <CheckCircle size={18} />
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Inspection Request */}
                    <aside className="property-details-sidebar">
                        <InspectionRequestForm
                            key={property.id}
                            property={property}
                        />
                    </aside>

                </div>
            </div>
        </section>
    );
};

export default PropertyDetails;