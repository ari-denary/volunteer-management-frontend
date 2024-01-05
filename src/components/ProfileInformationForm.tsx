
import { MenuItem, TextField } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

// INTERFACES (TYPESCRIPT):
interface CreateProfileInformationProps {
    handleSaveProfile: (formData: object) => void;
  }

/** ProfileInformationForm -------------------------------------------------------
 *
 * State:
 * - formData:
 *   {
 *    first_name: "",
 *    last_name: "",
 *    gender: "",
 *    dob: ""
 *   }
 *
 * Props:
 * - handleSaveProfile: function passed down from Signup to call upon form submission
 * 
 * Routed at:
 *   /signup/profile
 *
 * Call list:
 *   RoutesList -> Signup --> CreateUserPassForm --> ProfileInformationForm
 *
 */
const ProfileInformationForm: React.FC<CreateProfileInformationProps> = ({ handleSaveProfile }) => {
    console.log("CreateUserPassForm called with handleSaveProfile = ", handleSaveProfile);

    // COMPONENT STATE:
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
        });

    // HANDLE CHANGE FUNCTION:
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const name = evt.target.id
        const value = evt.target.value;
        setFormData((fData) => ({
          ...fData,
          [name]: value,
        }));
      }

    const handleSelectChange = (evt: SelectChangeEvent<typeof formData>) => {
        const name = evt.target.name
        const value = evt.target.value;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
          }));
      };

    console.log("ProfileInformationForm formData = ", formData);

    // HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("CreateUserPassForm handleSubmit called with formData = ", formData);

        handleSaveProfile({ 
            first_name: formData.first_name,
            last_name: formData.last_name,
            dob: formData.dob,
            gender: formData.gender,
        });
            
    }

    return (
    <div>
        <h1>Profile Information</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <TextField 
                    id="first_name" 
                    placeholder='First Name' 
                    size='small'
                    onChange={handleChange}
                />
                <TextField 
                    id="last_name" 
                    placeholder='Last Name' 
                    size='small'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Gender: </label>
                <Select
                    name="gender" 
                    placeholder='Gender' 
                    label='Gender'
                    onChange={handleSelectChange}
                    value=""
                >
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="non-binary">Non-binary</MenuItem>
                </Select>
                <label>Pronouns: </label>
                <Select 
                    name="pronouns" 
                    placeholder='pronouns' 
                    label='Pronouns'
                    value=""
                >
                    <MenuItem value="she/her">She/Her</MenuItem>
                    <MenuItem value="he/him">He/Him</MenuItem>
                    <MenuItem value="they/them">They/Them</MenuItem>
                </Select>
            </div>
            <div>
                <label>Date of Birth: </label>
                <input 
                    type="date"
                    id="dob"
                    onChange={handleChange}
                >
                </input>
            </div>
            <label>Race and Ethnicity:</label>
                <TextField 
                    fullWidth 
                    select 
                    id="race" 
                    placeholder='Race' 
                    label='Race'
                >
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
                <TextField 
                    fullWidth 
                    select 
                    id="ethnicity" 
                    placeholder='Ethnicity' 
                    label='Ethnicity'
                >
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            <div>
            <label>Language:</label>
                <TextField 
                    fullWidth 
                    select 
                    id="primaryLanguage" 
                    placeholder='Primary Language' 
                    label='Primary Language'
                >
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
                <TextField 
                    fullWidth 
                    select 
                    id="additionalLanguage" 
                    placeholder='Additional Language' 
                    label='Additional Language'
                >
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
            <button className="btn btn-primary" type="submit"/>
        </form>
    </div>
  )
}

export default ProfileInformationForm
