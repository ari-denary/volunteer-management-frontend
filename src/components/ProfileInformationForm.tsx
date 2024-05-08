
import { MenuItem, TextField, Button, Typography } from '@mui/material'
import { useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


// INTERFACES (TYPESCRIPT):
interface CreateProfileInformationProps {
    handleSaveData: (formData: object) => void;
  }

// ARRAY OF PRONOUNS, RACES
const pronouns = ["She/her/her", "He/him/his", "They/them/their", "Ze/Zir/Zem"]
const races = ["White", "Black", "Asian", "Hispanic"]


/** ProfileInformationForm -------------------------------------------------------
 *
 * State:
 * - formData:
 *   {
 *    first_name: "",
 *    last_name: "",
 *    gender: "",
 *    pronouns: "",
 *    dob: "",
 *    race: "",
 *    ethnicity: "",
 *   }
 *
 * Props:
 * - handleSaveData: function passed down from Signup to call upon form submission
 * 
 * Routed at:
 *   /signup
 *
 * Call list:
 *   RoutesList -> Signup --> CreateUserPassForm --> ProfileInformationForm
 *
 */
const ProfileInformationForm: React.FC<CreateProfileInformationProps> = ({ handleSaveData }) => {
    console.log("CreateUserPassForm called with handleSaveData = ", handleSaveData);
   
    // COMPONENT STATE:
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
        pronouns: "",
        race: "",
        ethnicity: "",
        language: "",
        is_multilingual:"",
        other_languages: ""
        });
    
    // HANDLE CHANGE FUNCTIONS:
    function handleChange(evt: React.ChangeEvent<HTMLInputElement> ) {
        const name = evt.target.id
        const value = evt.target.value;
        setFormData((fData) => ({
          ...fData,
          [name]: value,
        }));
      }

    console.log("ProfileInformationForm formData = ", formData);

    // HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement> ) {
        evt.preventDefault();
        console.log("CreateUserPassForm handleSubmit called with formData = ", formData);

        handleSaveData({ 
            first_name: formData.first_name,
            last_name: formData.last_name,
            dob: formData.dob,
            gender: formData.gender,
            pronouns: formData.pronouns,
            language: formData.language,
            ethnicity: formData.ethnicity,
            is_multilingual: formData.is_multilingual,
            other_languages: formData.other_languages,
        });
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
            <Typography variant='h4' component="h2">Profile Information</Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
                <Grid item xs={6} sm={6}>
                    <TextField 
                        fullWidth
                        id="first_name"
                        size='small'
                        onChange={handleChange}
                        label="First Name"
                    />
                </Grid>
                <Grid item xs={6} sm={6}>

                    <TextField 
                    fullWidth
                        id="last_name"
                        size='small'
                        label="Last Name"
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={6} sm={6}>
                        <TextField
                            select
                            fullWidth
                            name="gender"
                            label='Gender'
                            id="gender"
                            onChange={handleChange}
                        >
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="non-binary">Non-binary</MenuItem>
                        </TextField>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        select
                        fullWidth
                        label='Pronouns'
                        id="pronouns"
                        onChange={handleChange}
                    >
                        { pronouns.map(pronoun => {
                            return(
                                <MenuItem value={pronoun}>{pronoun}</MenuItem> 
                            )
                        })}
                    </TextField>

                </Grid>
                <Grid item xs={12}>
                    {/* <label>Date of Birth: </label> */}
                    <TextField
                        label="Date of Birth"
                        fullWidth
                        type="date"
                        id="dob"
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth 
                        select 
                        id="race"
                        label='Race'
                        onChange={handleChange}
                    >
                        { races.map(race => {
                            return(
                                <MenuItem value={race}>{race}</MenuItem> 
                            )
                        })}
                    </TextField>

                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth 
                        select 
                        id="ethnicity"
                        label='Ethnicity'
                        onChange={handleChange}
                    >
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth 
                        select 
                        id="language"
                        label='Primary Language'
                        onChange={handleChange}
                    >
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth 
                        select 
                        id="additionalLanguage"
                        label='Additional Language'
                        onChange={handleChange}
                    >
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    > Next
                    </Button>
                </Grid>
            </Grid>
        </Box>
        </Box>
    </Container>
  )
}

export default ProfileInformationForm
