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

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target
    setFormData((fData)=> ({
            ...fData,
            [name]: value,
        }))
    }


    const handleSelectChange = (e: SelectChangeEvent<typeof formData>) => {
        const name = e.target.name
        const value = e.target.value;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    console.log("HealthcareProviderForm formData = ", formData);

    //HANDLE SUBMIT FUNCTION:
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("studentinfoform handleSubmit called with formData = ''", formData);

        handleSaveData({
            type_of_student: formData.type_of_student,
            school: formData.school,
            degree: formData.degree,
            anticipated_graduation: formData.anticipated_graduation,
            major: formData.major,
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
                    <TextField fullWidth type="text" id="schoolName" placeholder='School Name' label='School Name' onChange={handleChange}>
                    </TextField>
                </div>
                <div>
                    <label>Degree:</label>
                    <Select fullWidth id="degree" placeholder='Degree' label='Degree' value={''} onChange={handleSelectChange}>
                        <MenuItem>0, Elementary or Middle School</MenuItem>
                        <MenuItem>1, High School or Equivalency</MenuItem>
                        <MenuItem>2, Associates Degree</MenuItem>
                        <MenuItem>3, Bachelors Degree</MenuItem>
                        <MenuItem>4, Masters Degree</MenuItem>
                        <MenuItem>5, Doctorate Degree</MenuItem>
                    </Select>
                </div>
                <div>
                    <label>Anticipated Graduation:</label>
                    <TextField id="month" placeholder='Month' label='Month' onChange={handleChange}>

                    </TextField>
                    <TextField id="year" placeholder='Year' label='Year' onChange={handleChange}>

                    </TextField>
                </div>
                <div>
                    <label>Major:</label>
                    <TextField fullWidth id="major" placeholder='Major' label='Major' onChange={handleChange}>
                    </TextField>
                </div>
                <div>
                    <label>Minor:</label>
                    <TextField fullWidth id="minor" placeholder='Minor' label='Minor' onChange={handleChange} >

                    </TextField>
                </div>
                <div>
                    <label>Classification:</label>
                    <Select fullWidth id="classification" placeholder='Classification' label='Classification' onChange={handleSelectChange}>
                        <MenuItem>Freshman</MenuItem>
                        <MenuItem>sophomore</MenuItem>
                        <MenuItem>junior</MenuItem>
                        <MenuItem>etc.</MenuItem>
                    </Select>
                </div>
                <Button type="submit">Next</Button>
            </form>
        </div>
    )
}

export default StudentInformationForm
