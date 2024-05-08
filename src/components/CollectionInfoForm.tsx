import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import ThinButton from './ThinButton';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';

//TYPESCRIPT INTERFACE
interface CollectionInfoFormProps {
    handleSaveData: (isChecked: object) => void;
}

const  CollectionInfoForm: React.FC<CollectionInfoFormProps> = ({handleSaveData}) => {


    //COMPONENT STATE:
    const [isChecked, setIsChecked] = useState({
        personal_info: false,
        contact_info: false,
        accuracy: false,
        certify: false
    });

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const name = evt.target.name
        const value = evt.target.checked;
        setIsChecked((fData) => ({
            ...fData,
            [name]: value,
          }));
      };
      console.log("collectionform formData = ", isChecked);
      const { personal_info, contact_info, accuracy, certify} = isChecked;

       //HANDLE NAVIGATE ROUTE:
    const navigate = useNavigate();


    function handleSubmit(evt: React.FormEvent<HTMLFormElement>){
        evt.preventDefault();
        console.log("Collectioninform handleSubmit called with formData= ", isChecked);
        //Additional actions after state update
        handleSaveData({
            personal_info: isChecked.personal_info,
            contact_info: isChecked.contact_info,
            accuracy: isChecked.accuracy,
            certify: isChecked.certify
        });

        console.log("handleSaveData called with data:", isChecked);

        navigate('./dashboard');
    };





    return (
        <>

        <FormControl component="fieldset" variant="standard">
        <form onSubmit={handleSubmit}>Assign responsibility Collection of Personal Information

        <h3>Disclaimer</h3>
        <p>Your privacy is important to us. The information you provide will only be used for the purpose of your involvement as a volunteer with Fundación Manos Juntas.</p>

        <h3>
        Personal Information
        </h3>
        <div>

        <FormControlLabel control={
        <Checkbox checked={personal_info} onChange={handleChange} name="personal_info"/>}
        label="I understand that my personal information will be stored and processed for the purposes of my involvement as a volunteer"/>
        </div>

        <h3>
        Contact Information
        </h3>
        <div>
        <FormControlLabel control={
        <Checkbox checked={contact_info} onChange={handleChange} name="contact_info"/>}
        label="By providing your contact information, you are consenting to be contacted by Fundación Manos Juntas via email, phone, or mail."/>
        </div>
        <h3>
        Accuracy of Information
        </h3>
        <div>
        <FormControlLabel control={
        <Checkbox checked={accuracy} onChange={handleChange} name="accuracy"/>}
        label="Please ensure that all information provided is accurate and up-to-date. Providing false information could result in termination of volunteer activities."/>
        </div>

        <div> <FormControlLabel control={
        <Checkbox checked={certify} onChange={handleChange} name="certify"/>}
        label="I certify that the information I have provided is accurate and true to the best of my knowledge."/></div>
        <button type="submit" >Complete Your Account</button>
        </form>

        </FormControl>
        </>

    )
}

export default CollectionInfoForm
