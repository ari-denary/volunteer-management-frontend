
import ThinButton from './ThinButton'
import { MenuItem, TextField } from '@mui/material'
const StudentInformationForm = () => {
  return (
    <div>
        <h1>Student Information</h1>
        <form>
            <div>
                <label>Type of Student:</label>
                <TextField fullWidth select id="gender" placeholder='Undergrad, grad, med, etc' label='Gender'>
                    <MenuItem>Undergraduate</MenuItem>
                    <MenuItem>Graduate</MenuItem>
                    <MenuItem>Medical</MenuItem>
                </TextField>
            </div>
            <div>
                <label>School Name:</label>
                <TextField fullWidth select id="schoolName" placeholder='School Name' label='School Name'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
            <div>
                <label>Degree:</label>
                <TextField fullWidth select id="degree" placeholder='Degree' label='Degree'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
            <div>
                <label>Anticipated Graduation:</label>
                    <TextField select id="month" placeholder='Month' label='Month'>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
                    <TextField select id="year" placeholder='Year' label='Year'>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
            </div>
            <div>
            <label>Major:</label>
                <TextField fullWidth select id="major" placeholder='Major' label='Major'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
            <div>
                <label>Minor:</label>
                <TextField fullWidth select id="minor" placeholder='Minor' label='Minor'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
            <div>
                <label>Classification:</label>
                <TextField fullWidth select id="classification" placeholder='Classification' label='Classification'>
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

export default StudentInformationForm
