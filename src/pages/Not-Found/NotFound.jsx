import { Link } from "react-router-dom";
import {
    House,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found-page">

            <div className="not-found-content">

                {/* Icon */}
                <div className="not-found-icon">
                    <House size={42} strokeWidth={1.5} />
                </div>

                {/* Error Code */}
                <h1>404</h1>

                <h2>Oops! Page Not Found.</h2>

                <p>
                    The page you're looking for may have been
                    moved, removed or does not exist.
                    Let's help you find your way back.
                </p>

                {/* Navigation Buttons */}
                <div className="not-found-actions">

                    <Link
                        to="/"
                        className="not-found-primary"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>

                    <Link
                        to="/properties"
                        className="not-found-secondary"
                    >
                        Explore Properties
                        <ArrowRight size={18} />
                    </Link>

                </div>

                {/* Brand */}
                <span className="not-found-brand">
                    HOMEFINDER
                </span>

            </div>

        </div>
    );
};

export default NotFound;