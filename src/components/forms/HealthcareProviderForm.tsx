import { MenuItem, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



// INTERFACES (TYPESCRIPT):
interface CreateProviderInformationProps {
    handleSaveData: (formData: object) => void;
  }

// ARRAY OF PROVIDER, DEGREE:
const providers = ["physician", "nurse", "etc"]
const employer = ["yes", "no"]
const degrees = ["BS", "BA", "MD", "DO", "MPH", "etc"]



const HealthcareProviderForm: React.FC<CreateProviderInformationProps> = ({handleSaveData}) => {
    console.log("CreateProviderInformationProps called with handleSaveData = ", handleSaveData);


    //COMPONENT STATE:
    const [formData, setFormData] = useState({
        type_of_provider: "",
        employer: "",
        degree: ""
    });



    // HANDLE CHANGE FUNCTION:
    function handleChange(evt: React.ChangeEvent<HTMLInputElement> ) {
        const name = evt.target.id
        const value = evt.target.value;
        setFormData((fData) => ({
          ...fData,
          [name]: value,
        }));
      }

      console.log("HealthcareProviderForm formData = ", formData);

      //HANDLE NAVIGATE ROUTE:
      const navigate = useNavigate();

      //HANDLE SUBMIT FUNCTION:
      function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("HealthcareProviderForm handleSubmit called with formData = ''", formData);

        handleSaveData({
            type_of_provider: formData.type_of_provider,
            employer: formData.employer,
            degree: formData.degree
        });
        navigate('../contactinfoform')

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
    <Typography variant='h3'>Healthcare Provider Information</Typography>
    <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                <label htmlFor='typeOfProvider'>Type of Provider</label>
                <TextField 
                name="type_of_provider" 
                fullWidth 
                id="typeOfProvider" 
                placeholder='Physician, Nurse, etc' label='Physician, Nurse, etc' 
                onChange={handleChange} 
                value={undefined}>

                    {providers.map(provider=>{
                        return(
                            <MenuItem key={provider} value={provider}>{provider}</MenuItem>
                        )
                    })}
                </TextField>
                </Grid>
            <Grid item xs={12}>
                <label>Employer</label>
                <TextField 
                    select 
                    name="employer" 
                    fullWidth  
                    id="employer" 
                    placeholder='Employer' 
                    label='Employer' onChange={handleChange}
                    value={undefined}>
                    {employer.map(e => {
                        return (
                        <MenuItem key={e} value={e}>{e}</MenuItem>)

                    })}



                </TextField>
            </Grid>
            <Grid item xs={12}>
                <label>Degree</label>
                <TextField name="degree" fullWidth id="Degree" placeholder='Degree (BS, BA, MD, DO, MPH, etc)' label='Degree (BS, BA, MD, DO, MPH, etc)' onChange={handleChange} value={undefined}>
                    {degrees.map(degree=> {
                        return <MenuItem key={degree} value={degree}>{degree}</MenuItem>
                    })}



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

export default HealthcareProviderForm
