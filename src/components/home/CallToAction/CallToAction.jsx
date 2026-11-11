
import { Link } from "react-router-dom";
import { ArrowRight, Search, House } from "lucide-react";

import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <span className="cta-subtitle">YOUR NEXT HOME IS CLOSER</span>

            <h2>
              Ready to Find a Place You'll Love?
            </h2>

            <p>
              Start exploring properties today and take the next step
              towards finding a place that feels like home.
            </p>

            <div className="cta-actions">
              <Link to="/properties" className="cta-primary-btn">
                <Search size={18} />
                Explore Properties
                <ArrowRight size={17} />
              </Link>

              <Link to="/about" className="cta-secondary-btn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="cta-decoration">
            <div className="cta-house-icon">
              <House size={100} strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
