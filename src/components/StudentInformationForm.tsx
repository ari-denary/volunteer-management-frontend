import ThinButton from './ThinButton';
import Button from '@mui/material/Button'
import { MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';

//TYPESCRIPT INTERFACE
interface StudentInfoProps {
    handleSaveData: (formData: object) => void;
}

// StudentInformationForm
// State:
// -formData:
// {
//     type_of_student: null,
//     school: null,
//     degree: null,
//     anticipated_graduation: null,
//     major: null
//     minor: null
//     classification: null

// }

// Props:
// -handleSaveData: function passed down from Signup to call upon form submission

// Routed at:
// /signup

// Call list:
//  *   RoutesList -> Signup --> CreateUserPassForm --> VolunteerTypeForm --> studentinfoform

// ARRAY OF STUDENTINFO:
const type_of_student = ["Undergraduate", "Graduate", "Medical"];


const StudentInformationForm: React.FC<StudentInfoProps> = ({ handleSaveData }) => {

    //HANDLE NAVIGATE ROUTE:
    const navigate = useNavigate();

    //COMPONENT STATE:
    const [formData, setFormData] = useState({
        type_of_student: "",
        school: "",
        degree: "",
        anticipated_graduation: "",
        major: "",
        minor: "",
        classification: ""

    })

    const handleSelectChange = (evt: SelectChangeEvent<typeof formData>) => {
        const name = evt.target.name
        const value = evt.target.value;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    console.log("HealthcareProviderForm formData = ", formData);

    //HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("studentinfoform handleSubmit called with formData = ''", formData);

        handleSaveData({

            type_of_student: formData.type_of_student,
            school: formData.school,
            degree: formData.degree,
            anticipated_graduation: formData.major,
            major: formData.minor,
            minor: formData.minor,
            classification: formData.classification

        });
        navigate('../contactinfoform')

    }

    return (
        <div>
            <h1>Student Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='typeOfStudent'>Type of Student:</label>
                    <Select fullWidth id="type_of_student" placeholder='Undergrad, grad, med, etc' label='Type of Student' value={undefined} onChange={handleSelectChange}>

                        {type_of_student.map(type => {
                            return (
                                <MenuItem key={type} value={type}>{type}</MenuItem>)


                        })}
                    </Select>
                </div>
                <div>
                    <label>School Name:</label>
                    <TextField fullWidth type="text" id="schoolName" placeholder='School Name' label='School Name'>
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

                    </TextField>
                    <TextField id="year" placeholder='Year' label='Year'>
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
                <Button type="submit">Next</Button>
            </form>
        </div>
    )
}

export default StudentInformationForm
