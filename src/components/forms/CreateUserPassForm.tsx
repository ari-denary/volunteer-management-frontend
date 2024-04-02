import { useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from "@mui/material";
// INTERFACES (TYPESCRIPT):
interface CreateUserPassFormProps {
  handleSaveUserPass: (formData: object) => void;
}

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
const CreateUserPassForm: React.FC<CreateUserPassFormProps> = ({ handleSaveUserPass }) => {
  console.log("CreateUserPassForm called with handleSaveUserPass = ", handleSaveUserPass);

  // COMPONENT STATE:
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  console.log("CreateUserPassForm formData = ", formData);

  // HANDLE CHANGE FUNCTION:
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const name = evt.target.id
    const value = evt.target.value;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

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
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log("CreateUserPassForm handleSubmit called with formData = ", formData);

    if (ensurePasswordValidation(formData.password, formData.confirmPassword)) {
      handleSaveUserPass({ 
        username: formData.username, 
        password: formData.password
      });
    }
  }

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
        <Typography variant='h4' component="h2">Create Username & Password </Typography>
        <Typography variant="body1">Pick a username for your new account</Typography>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={1} direction={"column"}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    type="text"
                    className="form-control"
                    id="username"
                    label="Username"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    type="password"
                    className="form-control"
                    id="password"
                    label="Password"
                    onChange={handleChange}
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
                    label="Comfirm Password"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Box>
       </Box>
      </Container>
  )
}

export default CreateUserPassForm;
