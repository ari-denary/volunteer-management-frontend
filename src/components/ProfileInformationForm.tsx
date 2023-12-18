
import React from 'react'
import InputField from './InputField'
import ThinButton from './ThinButton'
import { MenuItem, TextField } from '@mui/material'
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


const ProfileInformationForm = () => {
  return (
    <div>

        <h1>Profile Information</h1>
        <form>
            <div>
                <label>Name:</label>
                <TextField id="firstName" placeholder='First Name' size='small'/>
                <TextField id="lastName" placeholder='Last Name' size='small'/>
            </div>
            <div>
                <label>Gender: </label>
                <TextField select id="gender" placeholder='Gender' label='Gender'>
                    <MenuItem>Female</MenuItem>
                    <MenuItem>Male</MenuItem>
                    <MenuItem>Non-binary</MenuItem>
                </TextField>
                <label>Pronouns: </label>
                <TextField select id="pronouns" placeholder='pronouns' label='Pronouns'>
                    <MenuItem>She/Her</MenuItem>
                    <MenuItem>He/Him</MenuItem>
                    <MenuItem>They/Them</MenuItem>
                </TextField>
            </div>
            <div>
                <label>Date of Birth: </label>
                <NumberInput
                    aria-label="Month"
                    placeholder="Month"
                    min={1} max={12}
                    />
                <NumberInput
                    aria-label="Day"
                    placeholder="Day"
                    min={1} max={31}
                    />
                <NumberInput
                    aria-label="Year"
                    placeholder="Year"
                    min={1920} max={2010}
                    />
            </div>
            <label>Race and Ethnicity:</label>
                <TextField fullWidth select id="race" placeholder='Race' label='Race'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
                <TextField fullWidth select id="ethnicity" placeholder='Ethnicity' label='Ethnicity'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            <div>
            <label>Language:</label>
                <TextField fullWidth select id="primaryLanguage" placeholder='Primary Language' label='Primary Language'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
                <TextField fullWidth select id="additionalLanguage" placeholder='Additional Language' label='Additional Language'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
        <ThinButton text='Next'/>
        </form>
    </div>
  )
}

export default ProfileInformationForm
