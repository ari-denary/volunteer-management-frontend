import Button from '@mui/material/Button';
import { useState } from "react";

// TYPESCRIPT INTERFACE
interface VolunteerTypeProps {
    handleSaveData: (formData: object) => void;
  }

const VolunteerTypeForm: React.FC<VolunteerTypeProps> = ({ handleSaveData }) => {
    // COMPONENT STATE:
    const [formData, setFormData] = useState({
        volunteer_type: ""
    });

    console.log("CreateUserPassForm formData = ", formData);

    // HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("VolunteerTypeForm handleSubmit called with formData = ", formData);

        handleSaveData({ 
            volunteer_type: formData.volunteer_type,
        });
    }

    return (
        <>
            <p>What type of Volunteer are you?</p>
            <form onSubmit={handleSubmit}>
                <div className='buttonContainer'>
                    <Button 
                        type="submit"
                        variant="contained" 
                        onClick={() => setFormData({volunteer_type: "Student"})}
                    > 
                        Student
                    </Button>
                </div>
                <div className='buttonContainer'>
                    <Button 
                        type="submit"
                        variant="contained" 
                        onClick={() => setFormData({volunteer_type: "Healthcare Provider"})}
                    > 
                        Healthcare Provider
                    </Button>
                </div>
                <div className='buttonContainer'>
                    <Button 
                        type="submit"
                        variant="contained" 
                        onClick={() => setFormData({volunteer_type: "General"})}
                    > 
                        General
                    </Button>
                </div>

            </form>
        </>
    )
}

export default VolunteerTypeForm
