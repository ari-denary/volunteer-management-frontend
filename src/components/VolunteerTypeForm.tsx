import Button from '@mui/material/Button';
import { useState } from "react";

// TYPESCRIPT INTERFACE
interface VolunteerTypeProps {
    handleSaveData: (formData: object) => void;
  }
/** VolunteerTypeForm -------------------------------------------------------
 *
 * State:
 * - formData:
 *   {
 *    volunteer_type: ""
 *   }
 *
 * Props:
 * - handleSaveData: function passed down from Signup to call upon form submission
 * 
 * Routed at:
 *   /signup
 *
 * Call list:
 *   RoutesList -> Signup --> CreateUserPassForm --> ProfileInformationForm --> VolunteerTypeForm
 *
 */
const VolunteerTypeForm: React.FC<VolunteerTypeProps> = ({ handleSaveData }) => {
    // COMPONENT STATE:
    const [formData, setFormData] = useState({
        is_student: false,
        is_healthcare_provider: false
    });

    console.log("CreateUserPassForm formData = ", formData);

    // HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("VolunteerTypeForm handleSubmit called with formData = ", formData);

        handleSaveData({ 
            is_student : formData.is_student,
            is_healthcare_provider : formData.is_healthcare_provider
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
                        onClick={() => setFormData({
                            is_student: true, 
                            is_healthcare_provider: false
                        })}
                    > 
                        Student
                    </Button>
                </div>
                <div className='buttonContainer'>
                    <Button 
                        type="submit"
                        variant="contained" 
                        onClick={() => setFormData({ 
                            is_healthcare_provider: true,
                            is_student: false, 
                        })}
                    > 
                        Healthcare Provider
                    </Button>
                </div>
                <div className='buttonContainer'>
                    <Button 
                        type="submit"
                        variant="contained" 
                        onClick={() => setFormData({
                            is_healthcare_provider: false,
                            is_student: false, 
                        })}
                    > 
                        General
                    </Button>
                </div>

            </form>
        </>
    )
}

export default VolunteerTypeForm
