import { Link } from "react-router-dom";
import {
    House,
    Search,
    ShieldCheck,
    CalendarCheck,
    Target,
    Eye,
    ArrowRight,
} from "lucide-react";

import "./About.css";

const benefits = [
    {
        icon: House,
        title: "Diverse Property Listings",
        description:
            "Explore apartments, duplexes, houses and land for rent or sale.",
    },
    {
        icon: Search,
        title: "Easy Property Search",
        description:
            "Find properties that match your location, budget and preferences.",
    },
    {
        icon: CalendarCheck,
        title: "Inspection Requests",
        description:
            "Express your interest and request an inspection directly from a property listing.",
    },
    {
        icon: ShieldCheck,
        title: "Informed Decisions",
        description:
            "Explore property photos, descriptions and amenities before making a decision.",
    },
];

const About = () => {
    return (
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay">
                    <div className="container">
                        <span className="about-eyebrow">
                            ABOUT HOMEFINDER
                        </span>

                        <h1>
                            Helping You Find a Place to Call Home.
                        </h1>

                        <p>
                            Making property discovery simpler and more
                            accessible across Nigeria.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="about-introduction">
                <div className="container about-introduction-grid">

                    <div className="about-introduction-image">
                        <img
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
                            alt="Modern residential property"
                            loading="lazy"
                        />
                    </div>

                    <div className="about-introduction-content">
                        <span className="about-section-label">
                            WHO WE ARE
                        </span>

                        <h2>
                            Finding Your Next Property Should Be Simple.
                        </h2>

                        <p>
                            HomeFinder is a property discovery platform
                            designed to help individuals and families find
                            suitable properties for rent or sale in Nigeria.
                        </p>

                        <p>
                            We bring property listings, detailed information,
                            images and inspection requests together in one
                            convenient platform.
                        </p>

                        <p>
                            Whether you are searching for your first apartment,
                            a family home or land for your next investment,
                            HomeFinder helps you explore your options.
                        </p>

                        <Link
                            to="/properties"
                            className="about-primary-button"
                        >
                            Explore Properties
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                </div>
            </section>

            {/* Mission and Vision */}
            <section className="about-mission-vision">
                <div className="container">

                    <div className="about-section-heading">
                        <span className="about-section-label">
                            OUR PURPOSE
                        </span>

                        <h2>Our Mission & Vision</h2>

                        <p>
                            Building a better property discovery experience.
                        </p>
                    </div>

                    <div className="about-purpose-grid">

                        <div className="about-purpose-card">
                            <div className="about-card-icon">
                                <Target size={28} />
                            </div>

                            <h3>Our Mission</h3>

                            <p>
                                To simplify property discovery by making
                                relevant property information accessible
                                and helping people connect with property
                                agents more easily.
                            </p>
                        </div>

                        <div className="about-purpose-card">
                            <div className="about-card-icon">
                                <Eye size={28} />
                            </div>

                            <h3>Our Vision</h3>

                            <p>
                                To become a trusted property discovery
                                platform that empowers individuals and
                                families to make informed real estate
                                decisions across Nigeria.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="about-benefits">
                <div className="container">

                    <div className="about-section-heading">
                        <span className="about-section-label">
                            THE HOMEFINDER EXPERIENCE
                        </span>

                        <h2>Why Choose HomeFinder?</h2>

                        <p>
                            Everything you need to start your property search.
                        </p>
                    </div>

                    <div className="about-benefits-grid">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <div
                                    className="about-benefit-card"
                                    key={benefit.title}
                                >
                                    <div className="about-card-icon">
                                        <Icon size={25} />
                                    </div>

                                    <h3>{benefit.title}</h3>

                                    <p>{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* Call To Action */}
            <section className="about-cta">
                <div className="container">
                    <div className="about-cta-content">

                        <h2>Ready to Find Your Next Home?</h2>

                        <p>
                            Explore available properties and take the
                            first step towards finding your ideal space.
                        </p>

                        <Link
                            to="/properties"
                            className="about-cta-button"
                        >
                            Browse Properties
                            <ArrowRight size={18} />
                        </Link>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;