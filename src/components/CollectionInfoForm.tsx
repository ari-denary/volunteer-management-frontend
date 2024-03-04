import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormWrapper } from './FormWrapper';

interface CollectionInfoFormProps {
    personal_info: boolean;
    contact_info: boolean;
    accuracy: boolean;
    certify: boolean;
    updateFields: (fields: Partial<CollectionInfoFormData>) => void;
}

interface CollectionInfoFormData {
    personal_info?: boolean;
    contact_info?: boolean;
    accuracy?: boolean;
    certify?: boolean;
}

const CollectionInfoForm: React.FC<CollectionInfoFormProps> = ({
    personal_info,
    contact_info,
    accuracy,
    certify,
    updateFields,
}) => {
    const handleCheckboxChange = (field: keyof CollectionInfoFormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
        updateFields({ [field]: event.target.checked });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add any form submission logic here
    };

    return (
        <FormWrapper title="Assign responsibility Collection of Personal Information">
            <FormControl component="fieldset" variant="standard">
                <form onSubmit={handleSubmit}>
                    <h3>Disclaimer</h3>
                    <p>
                        Your privacy is important to us. The information you provide will only be used for the purpose
                        of your involvement as a volunteer with Fundación Manos Juntas.
                    </p>

                    <h3>Personal Information</h3>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={personal_info} onChange={handleCheckboxChange('personal_info')} />}
                            label="I understand that my personal information will be stored and processed for the purposes of my involvement as a volunteer"
                        />
                    </FormGroup>

                    <h3>Contact Information</h3>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={contact_info} onChange={handleCheckboxChange('contact_info')} />}
                            label="By providing your contact information, you are consenting to be contacted by Fundación Manos Juntas via email, phone, or mail."
                        />
                    </FormGroup>

                    <h3>Accuracy of Information</h3>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={accuracy} onChange={handleCheckboxChange('accuracy')} />}
                            label="Please ensure that all information provided is accurate and up-to-date. Providing false information could result in termination of volunteer activities."
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={certify} onChange={handleCheckboxChange('certify')} />}
                            label="I certify that the information I have provided is accurate and true to the best of my knowledge."
                        />
                    </FormGroup>

                    <button type="submit">Complete Your Account</button>
                </form>
            </FormControl>
        </FormWrapper>
    );
}

export default CollectionInfoForm;
