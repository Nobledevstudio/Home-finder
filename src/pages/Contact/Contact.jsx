import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    ChevronDown,
} from "lucide-react";

import "./Contact.css";

const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        value: "hello@homefinder.com",
        description: "Send us your questions and enquiries.",
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+234 906 767 906",
        description: "Speak with our support team.",
    },
    {
        icon: MapPin,
        title: "Our Location",
        value: "Lagos, Nigeria",
        description: "Serving property seekers across Nigeria.",
    },
    {
        icon: Clock,
        title: "Business Hours",
        value: "Monday - Friday",
        description: "9:00 AM - 5:00 PM",
    },
];

const faqs = [
    {
        question: "How do I find a property?",
        answer:
            "Visit our Properties page and use the search and filter options to find properties that match your preferences.",
    },
    {
        question: "How do I request a property inspection?",
        answer:
            "Open the property details page and complete the inspection request form with your contact information and preferred date.",
    },
    {
        question: "Does submitting an inspection request confirm my appointment?",
        answer:
            "No. An inspection request expresses your interest. The property agent needs to contact you to confirm the appointment.",
    },
    {
        question: "Can I find properties for both rent and sale?",
        answer:
            "Yes. HomeFinder provides listings for both rent and sale, including apartments, houses, duplexes and land.",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate form submission
        setSubmitted(true);
        setFormData(initialForm);
    };

    return (
        <div className="contact-page">

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-overlay">
                    <div className="container">

                        <span className="contact-eyebrow">
                            CONTACT HOMEFINDER
                        </span>

                        <h1>We Would Love to Hear From You.</h1>

                        <p>
                            Have a question or need assistance finding
                            your next property? Get in touch with us.
                        </p>

                    </div>
                </div>
            </section>

            {/* Contact Information and Form */}
            <section className="contact-section">
                <div className="container contact-layout">

                    {/* Contact Information */}
                    <div className="contact-information">

                        <span className="contact-section-label">
                            GET IN TOUCH
                        </span>

                        <h2>Let's Start a Conversation.</h2>

                        <p className="contact-intro">
                            Whether you have questions about our platform,
                            property listings or inspection requests,
                            we are here to help.
                        </p>

                        <div className="contact-info-list">

                            {contactInfo.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        className="contact-info-item"
                                        key={item.title}
                                    >
                                        <div className="contact-info-icon">
                                            <Icon size={23} />
                                        </div>

                                        <div className="contact-info-content">
                                            <h3>{item.title}</h3>
                                            <strong>{item.value}</strong>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card">

                        <h2>Send Us a Message</h2>

                        <p className="contact-form-description">
                            Fill in the form below with your enquiry.
                        </p>

                        {submitted ? (
                            <div
                                className="contact-success"
                                role="status"
                            >
                                <CheckCircle size={55} />

                                <h3>Demo Submission Successful!</h3>

                                <p>
                                    Your form has been submitted for
                                    demonstration purposes.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="contact-form-row">

                                    <div className="contact-form-field">
                                        <label htmlFor="fullName">
                                            Full Name
                                        </label>

                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="contact-form-field">
                                        <label htmlFor="email">
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                </div>

                                <div className="contact-form-row">

                                    <div className="contact-form-field">
                                        <label htmlFor="phone">
                                            Phone Number (Optional)
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="08012345678"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="contact-form-field">
                                        <label htmlFor="subject">
                                            Subject
                                        </label>

                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">
                                                Select a subject
                                            </option>

                                            <option value="General Enquiry">
                                                General Enquiry
                                            </option>

                                            <option value="Property Enquiry">
                                                Property Enquiry
                                            </option>

                                            <option value="Inspection Enquiry">
                                                Inspection Enquiry
                                            </option>

                                            <option value="Technical Support">
                                                Technical Support
                                            </option>

                                            <option value="Other">
                                                Other
                                            </option>
                                        </select>
                                    </div>

                                </div>

                                <div className="contact-form-field">
                                    <label htmlFor="message">
                                        Your Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="contact-submit-button"
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>

                            </form>
                        )}

                    </div>

                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="contact-faq-section">
                <div className="container">

                    <div className="contact-faq-heading">

                        <span className="contact-section-label">
                            NEED HELP?
                        </span>

                        <h2>Frequently Asked Questions</h2>

                        <p>
                            Find answers to common questions about HomeFinder.
                        </p>

                    </div>

                    <div className="contact-faq-list">

                        {faqs.map((faq) => (
                            <details
                                className="contact-faq-item"
                                key={faq.question}
                            >
                                <summary>
                                    {faq.question}
                                    <ChevronDown size={20} />
                                </summary>

                                <p>{faq.answer}</p>
                            </details>
                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
};

export default Contact;