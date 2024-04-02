import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { MenuItem, TextField, Button, Typography } from '@mui/material'
//TYPESCRIPT INTERFACE
interface VolunteerInfoProps {
    handleSaveData: (formData: object) => void;
}

// VolunteerTypeForm
// State:
// -formData:
// {
//     is_student: null,
//     is_provider: null,
//     is_general: null

// }

// Props:
// -handleSaveData: function passed down from Signup to call upon form submission

// Routed at:
// /signup

// Call list:
//  *   RoutesList -> Signup --> CreateUserPassForm --> ProfileInformationForm --> VolunteerTypeForm

const VolunteerTypeForm: React.FC<VolunteerInfoProps> = ({ handleSaveData }) => {

    const navigate = useNavigate();

    //COMPONENT STATE:
    const [formData, setFormData] = useState({
        is_student: "",
        is_provider: "",
        is_general: ""
    });

    //HANDLE CHANGE FUNCTION:
    function handleChange(volunteerType: string) {
        setFormData((fData) => ({
            ...fData,
            [volunteerType]: true
        }));

         //Update the route based on the clicked button
    switch (volunteerType) {
        case 'is_student':
          navigate('/signup/profile/volunteertype/studentinfoform');
          break;
        case 'is_provider':
          navigate('/signup/profile/volunteertype/healthcareproviderinfoform');
          break;
        case 'is_general':
          navigate('/signup/profile/volunteertype/contactinfoform');
          break;
        default:
          break;
      }
    }

    console.log("Volunteertypeinfo formData = ", formData);

    //HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("VolunteerTypeForm handleSubmit called with formData= ", formData);

        handleSaveData({
            is_student: formData.is_student,
            is_provider: formData.is_provider,
            is_general: formData.is_general
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
            <Typography variant='h4' component="h2">What type of volunteer are you?</Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
           
                <Grid item xs={12} className='buttonContainer'>
                    <Button id="is_student" variant="contained" fullWidth type="button" onClick={()=> handleChange('is_student')}>Student</Button>
                </Grid>
                <Grid item xs={12} className='buttonContainer'>
                    <Button id="is_provider" fullWidth
                variant="contained"
                type="button" onClick={()=> handleChange('is_provider')}>Healthcare Provider</Button>
                </Grid>
                <Grid item xs={12} className='buttonContainer'>
                    <Button id="is_general" type="button" 
                    fullWidth
                    variant="contained"
                    onClick={()=> handleChange('is_general')}>General</Button>
                </Grid>

            </Grid>
            </Box>
            </Box>
        </Container>
    )
}

export default VolunteerTypeForm
