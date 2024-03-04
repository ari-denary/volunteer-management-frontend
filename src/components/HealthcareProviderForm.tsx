import { MenuItem, TextField } from '@mui/material';
import ThinButton from './ThinButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormWrapper } from './FormWrapper';




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
        <form>
            <div>
                <label htmlFor='typeOfProvider'>Type of Provider</label>
                <Select name="type_of_provider" fullWidth id="typeOfProvider" placeholder='Physician, Nurse, etc' label='Physician, Nurse, etc' value={type_of_provider} onChange={(e) => updateFields({
                    type_of_provider: e.target.value
                })}>


                            <MenuItem value="physician">physician</MenuItem>
                            <MenuItem value="nurse">nurse</MenuItem>
                            <MenuItem value="etc">etc</MenuItem>


     </Select>
            </div>
            <div>
                <label>Employer</label>
                <TextField name="employer" fullWidth  id="employer" placeholder='Employer' label='Employer' onChange={(e) => updateFields({
                    employer: e.target.value
                })} value={employer}>




                </TextField>
            </div>
            <div>
                <label>Degree</label>
                <Select name="degree" fullWidth id="Degree" placeholder='Degree (BS, BA, MD, DO, MPH, etc)' label='Degree (BS, BA, MD, DO, MPH, etc)' onChange={(e) => {
                    updateFields ({degree: e.target.value})
                }} value={degree}>
                    {degrees.map(degree=> {
                        return <MenuItem key={degree} value={degree}>{degree}</MenuItem>
                    })}



                </Select>
            </div>

        </form>
    </FormWrapper>
  )
}

export default HealthcareProviderForm
