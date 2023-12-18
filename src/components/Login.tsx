import react from "@vitejs/plugin-react-swc";
import React from "react";

function Login() {
    return (
        <>
            <img src="src/images/logo.png" alt="logo" />
            <div>
                <p>Manos Juntas</p>
            </div>
            <div>
                <p>Volunteer Portal</p>
            </div>
            <form>
                <div className="mb-3">
                    <label
                        htmlFor="login"
                        className="form-label"
                    ></label>
                    <input
                        type="email"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="password"
                        className="form-label"
                    ></label>
                    <input
                        type="email"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <a href="./forgotPassword" type="submit">
                        Forgot password?
                    </a>
                </div>

                <div className="">
                    <button className="btn btn-primary" type="button">
                        Login
                    </button>
                </div>

                <div>
                    <p>Don’t have an account? <a href="./signUp">Sign Up</a></p>
                </div>
            </form>
        </>
    );
}

export default Login;
