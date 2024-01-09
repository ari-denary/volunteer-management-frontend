import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

//TYPESCRIPT INTERFACE
interface VolunteerInfoProps {
    handleSaveData: (formData: object) => void;
}

// VolunteerTypeForm
// State:
// -formData:
// {
//     is_student: null,
//     is_provider: null,
//     is_general: null

// }

// Props:
// -handleSaveData: function passed down from Signup to call upon form submission

// Routed at:
// /signup

// Call list:
//  *   RoutesList -> Signup --> CreateUserPassForm --> ProfileInformationForm --> VolunteerTypeForm

const VolunteerTypeForm: React.FC<VolunteerInfoProps> = ({ handleSaveData }) => {

    const navigate = useNavigate();

    //COMPONENT STATE:
    const [formData, setFormData] = useState({
        is_student: "",
        is_provider: "",
        is_general: ""
    });

    //HANDLE CHANGE FUNCTION:
    function handleChange(volunteerType: string) {
        setFormData((fData) => ({
            ...fData,
            [volunteerType]: true
        }));

         //Update the route based on the clicked button
    switch (volunteerType) {
        case 'is_student':
          navigate('/signup/profile/volunteertype/studentinfoform');
          break;
        case 'is_provider':
          navigate('/signup/profile/volunteertype/healthcareproviderinfoform');
          break;
        case 'is_general':
          navigate('/signup/profile/volunteertype/contactinfoform');
          break;
        default:
          break;
      }
    }

    console.log("Volunteertypeinfo formData = ", formData);

    //HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("VolunteerTypeForm handleSubmit called with formData= ", formData);

        handleSaveData({
            is_student: formData.is_student,
            is_provider: formData.is_provider,
            is_general: formData.is_general
        });

    }

    return (
        <>
            <h1>What type of Volunteer are you?</h1>
            <form onSubmit={handleSubmit}>
                <div className='buttonContainer'>
                    <button id="is_student" type="button" onClick={()=> handleChange('is_student')}>Student</button>
                </div>
                <div className='buttonContainer'>
                    <button id="is_provider" type="button" onClick={()=> handleChange('is_provider')}>Healthcare Provider</button>
                </div>
                <div className='buttonContainer'>
                    <button id="is_general" type="button" onClick={()=> handleChange('is_general')}>General</button>
                </div>

            </form>
            <div>
                    <button id="next" type="submit">Next</button>
                </div>

        </>
    )
}

export default VolunteerTypeForm
