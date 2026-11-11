
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./PropertyCategories.css";

const categories = [
  {
    id: 1,
    name: "Self Contain",
    description: "Affordable spaces for comfortable living.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85",
    count: "Explore properties",
  },
  {
    id: 2,
    name: "Mini Flat",
    description: "Perfect spaces for individuals and couples.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85",
    count: "Explore properties",
  },
  {
    id: 3,
    name: "Apartment",
    description: "Modern apartments for everyday living.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85",
    count: "Explore properties",
  },
  {
    id: 4,
    name: "Duplex",
    description: "Spacious homes with room for everyone.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=85",
    count: "Explore properties",
  },
  {
    id: 5,
    name: "House",
    description: "Find a house that feels like home.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=85",
    count: "Explore properties",
  },
  {
    id: 6,
    name: "Land",
    description: "Find the right space for your next project.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=85",
    count: "Explore properties",
  },
];

const PropertyCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/properties?type=${encodeURIComponent(category)}`);
  };

  return (
    <section className="property-categories section-padding">
      <div className="container">
        <div className="categories-heading">
          <div>
            <span className="section-subtitle">EXPLORE PROPERTIES</span>
            <h2>Find a Home That Fits Your Lifestyle</h2>
            <p>
              Browse through our property categories and discover a
              space that matches your needs and budget.
            </p>
          </div>

          <button
            className="categories-view-all"
            onClick={() => navigate("/properties")}
          >
            View All Properties
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <button
              type="button"
              className="category-card"
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={`${category.name} property`}
                  className="category-image"
                  loading="lazy"
                />

                <span className="category-explore-icon">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="category-content">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-count">
                    {category.count}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
