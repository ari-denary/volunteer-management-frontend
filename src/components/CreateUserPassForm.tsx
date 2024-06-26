import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from "@mui/material";

type CreateUserData = {
  username: string;
  password: string;
  confirmPassword: string;
};

type CreateUserPassForProps = CreateUserData & {
  updateFields: (fields: Partial<CreateUserData>) => void;
};

function CreateUserPassForm({
  username,
  password,
  confirmPassword,
  updateFields,
}: CreateUserPassForProps) {
  return (
    <FormWrapper title="Create an account">
      <Container component='main' maxWidth="sm">
      <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
      >
        {/* <Typography variant='h4' component="h2">Create Username & Password </Typography> */}
        <Typography variant="body1">Create a username and password for your new account</Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    type="text"
                    className="form-control"
                    id="username"
                    label="Username"
                    onChange={e => updateFields({username: e.target.value})}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    type="password"
                    className="form-control"
                    id="password"
                    label="Password"
                    onChange={e => updateFields({password: e.target.value})}
                />
            </Grid>
            <Grid item xs={12}>
                <label
                    htmlFor="confirmPassword"
                    className="form-label"
                ></label>
                <TextField
                    fullWidth
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    label="Confirm Password"
                    onChange={e => updateFields({confirmPassword: e.target.value})}
                />
            </Grid>
            {/* <Grid item xs={12}>
              <Button type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next
              </Button>
            </Grid> */}
          </Grid>
        </Box>
       </Box>
      </Container>
    </FormWrapper>
  );
}

export default CreateUserPassForm;

/** CreateUserPassForm -------------------------------------------------------
 *
 * State:
 * - formData:
 *   {
 *    username: "",
 *    password: "",
 *    confirmPassword: "",
 *   }
 *
 * Props:
 * - handleSaveUserPass: function passed down from Signup to call upon form submission
 *
 * Routed at:
 *   /signup/create-username
 *
 * Call list:
 *   RoutesList -> Signup --> CreateUserPassForm
 *
 */

// HELPER FUNCTIONS:
function ensurePasswordValidation(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return false;
  }
  return true;
}

// HANDLE SUBMIT FUNCTION:
// function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
//   evt.preventDefault();

//   if (ensurePasswordValidation(UserData.password, UserData.confirmPassword)) {
//     handleSaveUserPass({
//       username: UserData.username,
//       password: UserData.password,
//     });
//   }
// }
