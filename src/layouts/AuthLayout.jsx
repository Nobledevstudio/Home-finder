import { Link, Outlet } from "react-router-dom";
import { House, ArrowLeft } from "lucide-react";

import "./AuthLayout.css";

const AuthLayout = () => {
    return (
        <div className="auth-layout">

            {/* Left Section */}
            <div className="auth-banner">
                <div className="auth-banner-overlay">

                    <Link to="/" className="auth-banner-logo">
                        <House size={30} />
                        <span>HomeFinder</span>
                    </Link>

                    <div className="auth-banner-content">
                        <span className="auth-banner-label">
                            FIND YOUR PERFECT SPACE
                        </span>

                        <h1>Your Next Home Starts Here.</h1>

                        <p>
                            Discover properties that match your
                            lifestyle, budget and aspirations.
                        </p>
                    </div>

                    <p className="auth-banner-footer">
                        &copy; {new Date().getFullYear()} HomeFinder.
                        All rights reserved.
                    </p>

                </div>
            </div>

            {/* Right Section */}
            <div className="auth-main">

                <div className="auth-container">

                    <Link to="/" className="auth-logo">
                        <House size={28} />
                        <span>HomeFinder</span>
                    </Link>

                    <Outlet />

                    <Link to="/" className="auth-back-link">
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default AuthLayout;