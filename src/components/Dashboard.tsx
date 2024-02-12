import { SliderValueLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { ChangeEvent, useState } from 'react';

// INTERFACES (TYPESCRIPT):
interface DashboardProps {
    handleSaveData: (formData: object) => void;

}

const Dashboard: React.FC<DashboardProps> = ({ handleSaveData }) => {
    console.log("DashboardProps called with handleSaveData = ", handleSaveData);

     //COMPONENT STATE:
     const [formData, setFormData] = useState(
        {
            volunteer_hours: "",
            trainings_evaluation: "",
            profile: "",
            volunteer_handbook: "",
            volunteer_discord: "",

        }
     )
     function handleChange(dashboardType: string) {
        setFormData((fData)=> ({
            ...fData,
            [dashboardType]: true,
        }));
     }
     // HANDLE SUBMIT FUNCTION:
     function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("dashboard handlesubmit called with formData= ", formData);
     }



    return (
        <>
            <div>
                <h3>Dashboard</h3>
                <h5>Total Hours</h5>
                <form onSubmit={handleSubmit}>
                <div>
                    <button id="volunteer_hours" type="button" onClick={()=>handleChange('volunteer_hours')} >Volunteer Hours</button>
                </div>
                <div><button id="trainings_evaluation" type="button" onClick={()=> {
                    ()=>handleChange("trainings_evaluation")
                }}>Training & Evaluation</button>
                </div>
                <div>
                    <button id="profile" type="button" onClick={()=>handleChange('profile')}>Profile</button>
                </div>
                <div>
                    <button id="volunteer_handbook" type="button" onClick={()=>handleChange("volunteer_discord")}>Volunteer Handbook</button>
                    <button id="volunteer_discord" type="button" onClick={()=>handleChange("volunteer_discord")}>Volunteer Discord</button>
                </div>
                <div>
                    <button color="success" type="submit">Check-in</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default Dashboard
