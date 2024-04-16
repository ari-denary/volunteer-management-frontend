import react from "@vitejs/plugin-react-swc";
import React from "react";
import { FormWrapper } from "./FormWrapper";

type UserData = {
    username: string,
    password: string,
}

type LoginFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function Login({username, password, updateFields}: LoginFormProps) {
    return (
        <FormWrapper title="Manos Juntas">
            <img src="src/images/logo.png" alt="logo" />

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
                        type="username"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={e => updateFields({username: e.target.value})}
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
                        value={password}
                        onChange={e => updateFields({password: e.target.value})}
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
        </FormWrapper>
    );
}

export default Login;
