import { useState } from "react";
import PropertyListings from "../../components/properties/Properties-Listings/PropertyListings";
import "./Properties.css";

const Properties = () => {

    const [sort, setSort] = useState("newest");

    return (
        <div className="properties-page">
            <section className="properties-hero">
                <div className="properties-hero-overlay">
                    <div className="container">
                        <div className="properties-hero-content">
                            <span className="properties-eyebrow">
                                EXPLORE PROPERTIES
                            </span>

                            <h1>
                                Find a Place You'll Love to Call Home.
                            </h1>

                            <p>
                                Explore houses, apartments, duplexes and land
                                for rent or sale across Nigeria.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="properties-content">
                <div className="container">
                    <div className="properties-top">
                        <div>
                            <h2>Available Properties</h2>
                            <p>Explore our collection of properties.</p>
                        </div>
                        <div className="properties-sort">
                            <label htmlFor="property-sort">Sort by:</label>
                            <select
                                id="property-sort"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <PropertyListings sort={sort} />
                </div>
            </section>
        </div>
    );
};

export default Properties;