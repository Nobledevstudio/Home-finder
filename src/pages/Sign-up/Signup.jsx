import { useState } from "react";
import { Link } from "react-router-dom";

import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
} from "lucide-react";

import "./Signup.css";

const initialForm = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Signup = () => {
    const [formData, setFormData] = useState(initialForm);

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        const {
            fullName,
            email,
            password,
            confirmPassword,
        } = formData;

        if (
            !fullName.trim() ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ) {
            setError("Please fill in all required fields.");
            return;
        }

        if (password.length < 8) {
            setError(
                "Password must contain at least 8 characters."
            );
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Registration will be connected to the backend later.

        setSuccess(
            "Form validated successfully. Account creation will be available when the backend is connected."
        );

        setFormData(initialForm);
    };

    return (
        <div className="signup-page">

            {/* Header */}
            <div className="auth-header">
                <h2>Create an Account</h2>

                <p>
                    Join HomeFinder and start your property journey.
                </p>
            </div>

            {/* Signup Form */}
            <form
                className="auth-form"
                onSubmit={handleSubmit}
            >

                {error && (
                    <div className="auth-error" role="alert">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="auth-success" role="status">
                        {success}
                    </div>
                )}

                {/* Full Name */}
                <div className="auth-field">

                    <label htmlFor="signup-name">
                        Full Name
                    </label>

                    <div className="auth-input-wrapper">

                        <User
                            size={18}
                            className="auth-input-icon"
                        />

                        <input
                            id="signup-name"
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                        />

                    </div>

                </div>

                {/* Email Address */}
                <div className="auth-field">

                    <label htmlFor="signup-email">
                        Email Address
                    </label>

                    <div className="auth-input-wrapper">

                        <Mail
                            size={18}
                            className="auth-input-icon"
                        />

                        <input
                            id="signup-email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                        />

                    </div>

                </div>

                {/* Password */}
                <div className="auth-field">

                    <label htmlFor="signup-password">
                        Password
                    </label>

                    <div className="auth-input-wrapper">

                        <Lock
                            size={18}
                            className="auth-input-icon"
                        />

                        <input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="new-password"
                            required
                        />

                        <button
                            type="button"
                            className="auth-password-toggle"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>

                    </div>

                    <span className="signup-password-hint">
                        Password must contain at least 8 characters.
                    </span>

                </div>

                {/* Confirm Password */}
                <div className="auth-field">

                    <label htmlFor="signup-confirm-password">
                        Confirm Password
                    </label>

                    <div className="auth-input-wrapper">

                        <Lock
                            size={18}
                            className="auth-input-icon"
                        />

                        <input
                            id="signup-confirm-password"
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            autoComplete="new-password"
                            required
                        />

                        <button
                            type="button"
                            className="auth-password-toggle"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                            aria-label={
                                showConfirmPassword
                                    ? "Hide confirm password"
                                    : "Show confirm password"
                            }
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>

                    </div>

                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="auth-submit-button"
                >
                    Create Account
                    <ArrowRight size={18} />
                </button>

            </form>

            <p className="auth-switch">
                Already have an account?{" "}
                <Link to="/login">
                    Log In
                </Link>
            </p>

        </div>
    );
};

export default Signup;