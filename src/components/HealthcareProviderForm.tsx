import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormWrapper } from './FormWrapper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography, MenuItem } from "@mui/material";

type CreateProvdierInfoProps = formData & {
    updateFields: (fields: Partial<any>) => void;
}

// ARRAY OF PROVIDER, DEGREE:


const degrees = ["BS", "BA", "MD", "DO", "MPH", "etc"]



function HealthcareProviderForm({
    type_of_provider,
    employer,
    degree,
updateFields}: CreateProvdierInfoProps) {


  return (
    <FormWrapper title="Healthcare Provider Information">
        <Container component='main' maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box>
                <Grid container spacing={1} direction={"column"}>
                    <Grid item xs={12}>
                        <label htmlFor='typeOfProvider'>Type of Provider</label>
                        <TextField 
                            select 
                            name="type_of_provider" 
                            fullWidth 
                            id="typeOfProvider" 
                            placeholder='Physician, Nurse, etc' 
                            label='Physician, Nurse, etc' 
                            value={type_of_provider} onChange={(e) => updateFields({
                            type_of_provider: e.target.value
                        })}>
                            <MenuItem value="physician">physician</MenuItem>
                            <MenuItem value="nurse">nurse</MenuItem>
                            <MenuItem value="etc">etc</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <label>Employer</label>
                        <TextField 
                            name="employer" 
                            fullWidth  
                            id="employer" 
                            placeholder='Employer' 
                            label='Employer' 
                            onChange={(e) => updateFields({
                            employer: e.target.value
                        })} value={employer}>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <label>Degree</label>
                        <TextField 
                            select 
                            name="degree" 
                            fullWidth 
                            id="Degree" 
                            placeholder='Degree (BS, BA, MD, DO, MPH, etc)' 
                            label='Degree (BS, BA, MD, DO, MPH, etc)' 
                            onChange={(e) => {
                            updateFields ({degree: e.target.value})
                        }} value={degree}>
                            {degrees.map(degree=> {
                                return <MenuItem key={degree} value={degree}>{degree}</MenuItem>
                            })}

                        </TextField>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </FormWrapper>
  )
}

export default HealthcareProviderForm
