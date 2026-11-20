import { useState } from "react";
import { CalendarDays, CheckCircle } from "lucide-react";
import "./InspectionRequestForm.css";

const InspectionRequestForm = ({ property }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const inspectionRequest = {
            propertyId: property.id,
            propertyTitle: property.title,
            fullName,
            email,
            phone,
            preferredDate: date,
            message,
        };

        // Temporary submission for frontend development
        console.log("Inspection Request:", inspectionRequest);

        setSubmitted(true);

        setFullName("");
        setEmail("");
        setPhone("");
        setDate("");
        setMessage("");
    };

    return (
        <div className="inspection-request">

            <div className="inspection-header">
                <div className="inspection-icon">
                    <CalendarDays size={24} />
                </div>

                <h2>Request Inspection</h2>

                <p>
                    Interested in this property? Submit your details
                    to request a property inspection.
                </p>
            </div>

            {submitted ? (
                <div className="inspection-success">
                    <CheckCircle size={40} />

                    <h3>Demo Request Successful!</h3>

                    <p>
                        Your inspection request has been captured for
                        demonstration purposes.
                    </p>

                    <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                    >
                        Submit Another Request
                    </button>
                </div>
            ) : (
                <form
                    className="inspection-form"
                    onSubmit={handleSubmit}
                >
                    <div className="inspection-field">
                        <label htmlFor="inspection-name">
                            Full Name
                        </label>

                        <input
                            id="inspection-name"
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="inspection-field">
                        <label htmlFor="inspection-email">
                            Email Address
                        </label>

                        <input
                            id="inspection-email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="inspection-field">
                        <label htmlFor="inspection-phone">
                            Phone Number
                        </label>

                        <input
                            id="inspection-phone"
                            type="tel"
                            placeholder="08012345678"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div className="inspection-field">
                        <label htmlFor="inspection-date">
                            Preferred Inspection Date
                        </label>

                        <input
                            id="inspection-date"
                            type="date"
                            min={new Date().toLocaleDateString("en-CA")}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="inspection-field">
                        <label htmlFor="inspection-message">
                            Additional Message (Optional)
                        </label>

                        <textarea
                            id="inspection-message"
                            rows="4"
                            placeholder="Tell us about your availability..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="inspection-submit"
                    >
                        Submit Inspection Request
                    </button>

                    <p className="inspection-note">
                        Submitting a request does not confirm an
                        inspection appointment.
                    </p>
                </form>
            )}
        </div>
    );
};

export default InspectionRequestForm;