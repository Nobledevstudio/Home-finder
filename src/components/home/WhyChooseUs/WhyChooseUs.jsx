
import {
  ShieldCheck,
  Search,
  BadgeCheck,
  CalendarCheck,
} from "lucide-react";

import "./WhyChooseUs.css";

const benefits = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Trusted Property Listings",
    description:
      "Our goal is to make property discovery safer by prioritising accurate information and property verification.",
  },
  {
    id: 2,
    icon: Search,
    title: "Easy Property Search",
    description:
      "Find properties that match your preferred location, property type and budget without unnecessary stress.",
  },
  {
    id: 3,
    icon: BadgeCheck,
    title: "Clear Property Information",
    description:
      "Explore property details, images, features and pricing before deciding which properties interest you.",
  },
  {
    id: 4,
    icon: CalendarCheck,
    title: "Convenient Inspections",
    description:
      "Request a property inspection online and receive updates when the agent responds to your request.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="why-choose-wrapper">
          <div className="why-choose-content">
            <span className="section-subtitle">
              WHY CHOOSE HOMEFINDER
            </span>

            <h2>
              Your Journey to Finding the Right Property Starts Here.
            </h2>

            <p className="why-choose-description">
              We make property discovery easier by bringing useful listings,
              property information and inspection requests together in one place.
            </p>

            <div className="why-choose-benefits">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div className="why-benefit" key={benefit.id}>
                    <div className="why-benefit-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="why-choose-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
              alt="Beautiful modern residential property"
            />

            <div className="why-image-card">
              <span className="why-image-card-icon">
                <ShieldCheck size={24} />
              </span>

              <div>
                <h4>Find Your Next Home</h4>
                <p>Discover properties that fit your lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
