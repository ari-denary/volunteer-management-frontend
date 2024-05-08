import react from "@vitejs/plugin-react-swc";
import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from "@mui/material";

function Login() {
    return (
        <Container component='main' maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src="src/images/logo.png" alt="logo" />
                <Typography variant='h4' component='h1'>Manos Juntas</Typography>
                <Typography variant='h4' component='h1' >Volunteer Portal</Typography>

                <Box component='form'>
                    <Grid container spacing={2} direction={"column"}>
                    <Grid item className="mb-3">
                        <label
                            htmlFor="login"
                            className="form-label"
                        ></label>
                        <TextField
                            type="email"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Username"
                        />
                    </Grid>
                    <Grid item className="mb-3">
                        <label
                            htmlFor="password"
                            className="form-label"
                        ></label>
                        <TextField
                            type="email"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />
                    </Grid>
                    <Grid item>
                        <a href="./forgotPassword" type="submit">
                            Forgot password?
                        </a>
                    </Grid>

                    <Grid item className="">
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Login
                        </Button>
                    </Grid>
                    <Grid item>
                        <p>Don’t have an account? <a href="./signUp">Sign Up</a></p>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
