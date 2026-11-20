import { useState } from "react";
import { Search } from "lucide-react";


import "./PropertyListings.css";
import properties from "../../../data/properties";
import PropertyCard from "../Properties-Card/PropertyCard";

const PropertyListings = ({ sort }) => {
    const [search, setSearch] = useState("");
    const [purpose, setPurpose] = useState("all");
    const [propertyType, setPropertyType] = useState("all");

    const filteredProperties = properties.filter((property) => {
        const matchesSearch =
            property.title.toLowerCase().includes(search.toLowerCase()) ||
            property.location.toLowerCase().includes(search.toLowerCase()) ||
            property.city.toLowerCase().includes(search.toLowerCase());

        const matchesPurpose =
            purpose === "all" || property.purpose === purpose;

        const matchesType =
            propertyType === "all" || property.propertyType === propertyType;

        return matchesSearch && matchesPurpose && matchesType;
    });

    if (sort === "price-low") {
        filteredProperties.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
        filteredProperties.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="property-listings">
            {/* Search and Filters */}
            <div className="property-filters">
                <div className="property-search">
                    <Search size={19} />

                    <input
                        type="search"
                        placeholder="Search property or location..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search properties"
                    />
                </div>

                <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    aria-label="Property purpose"
                >
                    <option value="all">All Purposes</option>
                    <option value="Rent">For Rent</option>
                    <option value="Sale">For Sale</option>
                </select>

                <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    aria-label="Property type"
                >
                    <option value="all">All Property Types</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Mini Flat">Mini Flat</option>
                    <option value="Self Contain">Self Contain</option>
                    <option value="House">House</option>
                    <option value="Land">Land</option>
                </select>
            </div>

            {/* Results Count */}
            <div className="property-results">
                {filteredProperties.length} properties found
            </div>

            {/* Property Grid */}
            {filteredProperties.length > 0 ? (
                <div className="properties-grid">
                    {filteredProperties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </div>
            ) : (
                <div className="properties-empty">
                    <Search size={35} />
                    <h3>No properties found</h3>
                    <p>Try changing your search or filters.</p>
                </div>
            )}
        </div>
    );
};

export default PropertyListings;