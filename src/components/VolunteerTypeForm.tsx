import Button from '@mui/material/Button';

function VolunteerTypeForm() {
    return (
        <>
            <p>What type of Volunteer are you?</p>
            <div className='buttonContainer'>
                <Button variant="contained" href='#StudentInfoForm'>Student</Button>
            </div>
            <div className='buttonContainer'>
                <Button variant="contained" href='#HealthcareProviderForm'>Healthcare Provider</Button>
            </div>
            <div className='buttonContainer'>
                <Button variant="contained" href='#ContactInfoForm'>General</Button>
            </div>

        </>
    )
}

export default VolunteerTypeForm
