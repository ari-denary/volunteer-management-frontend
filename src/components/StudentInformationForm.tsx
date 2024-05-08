import Button from '@mui/material/Button'
import { MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//TYPESCRIPT INTERFACE
interface StudentInfoProps {
    handleSaveData: (formData: object) => void;
}

// StudentInformationForm
// State:
// -formData:
// {
//     type_of_student: null,
//     school: null,
//     degree: null,
//     anticipated_graduation: null,
//     major: null
//     minor: null
//     classification: null

// }

// Props:
// -handleSaveData: function passed down from Signup to call upon form submission

// Routed at:
// /signup

// Call list:
//  *   RoutesList -> Signup --> CreateUserPassForm --> VolunteerTypeForm --> studentinfoform

// ARRAY OF STUDENTINFO:
const type_of_student = ["Undergraduate", "Graduate", "Medical"];


const StudentInformationForm: React.FC<StudentInfoProps> = ({ handleSaveData }) => {

    //HANDLE NAVIGATE ROUTE:
    const navigate = useNavigate();

    //COMPONENT STATE:
    const [formData, setFormData] = useState({
        type_of_student: "",
        school: "",
        degree: "",
        anticipated_graduation: "",
        major: "",
        minor: "",
        classification: ""

    })

    function handleChange(evt: React.ChangeEvent<HTMLInputElement> ) {
        const name = evt.target.id
        const value = evt.target.value;
        setFormData((fData) => ({
          ...fData,
          [name]: value,
        }));
      }

    console.log("HealthcareProviderForm formData = ", formData);

    //HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("studentinfoform handleSubmit called with formData = ''", formData);

        handleSaveData({
            type_of_student: formData.type_of_student,
            school: formData.school,
            degree: formData.degree,
            anticipated_graduation: formData.major,
            major: formData.minor,
            minor: formData.minor,
            classification: formData.classification

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
            <Typography variant='h4' component="h2">Student Information</Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
                <Grid item xs={12}>

                    {/* <label htmlFor='typeOfStudent'>Type of Student:</label> */}
                    <TextField select 
                    fullWidth id="type_of_student" placeholder='Undergrad, grad, med, etc' 
                    label='Type of Student' 
                    onChange={handleChange}>

                        {type_of_student.map(type => {
                            return (
                                <MenuItem key={type} value={type}>{type}</MenuItem>)


                        })}
                    </TextField>
                    
                </Grid>
                
                <Grid item xs={12}>
                    <label>School Name:</label>
                    <TextField fullWidth type="text" id="schoolName" label='School Name'
                    onChange={handleChange}>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <label>Degree:</label>
                    <TextField fullWidth select id="degree" label='Degree'
                    onChange={handleChange}>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
                </Grid>
                <Grid item>
                    <label>Anticipated Graduation:</label>
                    <TextField type="date" id="month" label='Month' 
                    onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    <label>Major:</label>
                    <TextField fullWidth select id="major" label='Major'
                    onChange={handleChange}>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <label>Minor:</label>
                    <TextField 
                    fullWidth 
                    select 
                    id="minor" label='Minor'
                    onChange={handleChange}>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <label>Classification:</label>
                    <TextField 
                    fullWidth 
                    select id="classification" label='Classification'
                    onChange={handleChange}>
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

export default StudentInformationForm
