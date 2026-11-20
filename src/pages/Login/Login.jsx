import { useState } from "react";
import { Link } from "react-router-dom";

import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
} from "lucide-react";

import "./Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
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

        if (!formData.email.trim() || !formData.password) {
            setError("Please fill in all required fields.");
            return;
        }

        // Authentication will be connected to the backend later.

        setSuccess(
            "Form validated successfully. Login functionality will be available when the backend is connected."
        );

        setFormData({
            email: "",
            password: "",
        });
    };

    return (
        <div className="login-page">

            {/* Header */}
            <div className="auth-header">
                <h2>Welcome Back!</h2>

                <p>
                    Enter your details to access your account.
                </p>
            </div>

            {/* Login Form */}
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

                {/* Email */}
                <div className="auth-field">

                    <label htmlFor="login-email">
                        Email Address
                    </label>

                    <div className="auth-input-wrapper">

                        <Mail
                            size={18}
                            className="auth-input-icon"
                        />

                        <input
                            id="login-email"
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

                    <label htmlFor="login-password">
                        Password
                    </label>

                    <div className="auth-input-wrapper">

                        <Lock
                            size={18}
                            className="auth-input-icon"
                        />

                        <input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
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

                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="auth-submit-button"
                >
                    Log In
                    <ArrowRight size={18} />
                </button>

            </form>

            <p className="auth-switch">
                Don't have an account?{" "}
                <Link to="/signup">
                    Sign Up
                </Link>
            </p>

        </div>
    );
};

export default Login;