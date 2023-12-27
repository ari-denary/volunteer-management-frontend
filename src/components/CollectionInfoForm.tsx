import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import ThinButton from './ThinButton'

function CollectionInfoForm () {
    return (
        <>
        <h1>Collection of Personal Information
        </h1>
        <h3>Disclaimer</h3>
        <p>Your privacy is important to us. The information you provide will only be used for the purpose of your involvement as a volunteer with Fundación Manos Juntas.</p>

        <h3>
        Personal Information
        </h3>
        <div>
        <Checkbox {...label} />
        <p>I understand that my personal information will be stored and processed for the purposes of my involvement as a volunteer.</p>
        </div>
        <h3>
        Contact Information
        </h3>
        <div><Checkbox {...label} />
        <p>By providing your contact information, you are consenting to be contacted by Fundación Manos Juntas via email, phone, or mail.</p>
        </div>
        <div>
            <h3>Accuracy of Information</h3>
            <p>Please ensure that all information provided is accurate and up-to-date. Providing false information could result in termination of volunteer activities.</p>
        </div>
        <div> <Checkbox {...label} /><p>I certify that the information I have provided is accurate and true to the best of my knowledge.</p></div>
        <ThinButton text='Complete Your Account'/>


        </>

    )
}

export default CollectionInfoForm
