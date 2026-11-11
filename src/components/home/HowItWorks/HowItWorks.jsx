
import { Search, CalendarCheck, House } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    number: "01",
    icon: Search,
    title: "Find Your Property",
    description:
      "Browse our property listings and use the search filters to find a home that matches your needs and budget.",
  },
  {
    id: 2,
    number: "02",
    icon: CalendarCheck,
    title: "Schedule an Inspection",
    description:
      "Found something you like? Submit an inspection request and choose a convenient date and time to visit.",
  },
  {
    id: 3,
    number: "03",
    icon: House,
    title: "Visit Your Next Home",
    description:
      "Wait for the agent to confirm your inspection and visit the property to see if it feels right for you.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="how-it-works-heading">
          <span className="section-subtitle">SIMPLE PROCESS</span>
          <h2>How HomeFinder Works</h2>
          <p>
            Finding your next home doesn't have to be complicated.
            Follow these three simple steps.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="how-step-card" key={step.id}>
                <div className="how-step-top">
                  <span className="how-step-number">{step.number}</span>

                  <div className="how-step-icon">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
