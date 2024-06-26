import react from "@vitejs/plugin-react-swc";
import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from "@mui/material";
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
            <Container component='main' maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                <img src="src/images/logo.png" alt="logo" />

                <Typography variant='h4' component='h1'>Manos Juntas</Typography>
                <Typography variant='h4' component='h1' >Volunteer Portal</Typography>

                <Box component='form'>
                    <Grid item className="mb-3">
                        <label
                            htmlFor="login"
                            className="form-label"
                        ></label>
                        <TextField
                            type="username"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={e => updateFields({username: e.target.value})}
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
                            placeholder="Password"
                            value={password}
                            onChange={e => updateFields({password: e.target.value})}
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
                    </Box>
                </Box>
            </Container>
        </FormWrapper>
    );
}

export default Login;
