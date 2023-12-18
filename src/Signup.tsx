function Signup() {
    return (
        <>
            <div>
                <h3>Create Username</h3>
                <p>Pick a username for your new account</p>
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
                    <div className="mb-3">
                        <label
                            htmlFor="password"
                            className="form-label"
                        ></label>
                        <input
                            type="email"
                            className="form-control"
                            id="password"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button className="btn btn-primary" type="button">Next</button>

            </form>

         </div>
        </>
    )
}

export default Signup;
