import { MenuItem, TextField } from '@mui/material'
import ThinButton from './ThinButton'

const HealthcareProviderForm = () => {
  return (
    <div>
        <h1>Healthcare Provider Information</h1>
        <form>
            <div>
                <label>Type of Provider</label>
                <TextField fullWidth select id="typeOfProvider" placeholder='Physician, Nurse, etc' label='Physician, Nurse, etc'>
                    <MenuItem>Physician</MenuItem>
                    <MenuItem>Nurse</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
            <div>
                <label>Employer</label>
                <TextField fullWidth select id="employer" placeholder='Employer' label='Employer'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
            <div>
                <label>Degree</label>
                <TextField fullWidth select id="Degree" placeholder='Degree (BS, BA, MD, DO, MPH, etc)' label='Degree (BS, BA, MD, DO, MPH, etc)'>
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

export default HealthcareProviderForm
