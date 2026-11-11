
import "./Properties.css";

const Properties = () => {
    return (
        <main className="properties-page">
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
                            <select id="property-sort" defaultValue="newest">
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Search, filters and property grid will go here */}

                    <div className="properties-empty">
                        <p>Property listings will appear here.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Properties;
