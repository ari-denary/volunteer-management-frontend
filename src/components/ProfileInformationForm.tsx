
import { FormControl, InputLabel, MenuItem, TextField } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

// INTERFACES (TYPESCRIPT):
interface CreateProfileInformationProps {
    handleSaveData: (formData: object) => void;
  }

// ARRAY OF PRONOUNS, RACES
const pronouns = ["She/her/her", "He/him/his", "They/them/their", "Ze/Zir/Zem"]
const races = ["White", "Black", "Asian", "Hispanic"]


/** ProfileInformationForm -------------------------------------------------------
 *
 * State:
 * - formData:
 *   {
 *    first_name: "",
 *    last_name: "",
 *    gender: "",
 *    pronouns: "",
 *    dob: "",
 *    race: "",
 *    ethnicity: "",
 *   }
 *
 * Props:
 * - handleSaveData: function passed down from Signup to call upon form submission
 * 
 * Routed at:
 *   /signup
 *
 * Call list:
 *   RoutesList -> Signup --> CreateUserPassForm --> ProfileInformationForm
 *
 */
const ProfileInformationForm: React.FC<CreateProfileInformationProps> = ({ handleSaveData }) => {
    console.log("CreateUserPassForm called with handleSaveData = ", handleSaveData);

    // COMPONENT STATE:
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
        pronouns: "",
        race: "",
        ethnicity: "",
        language: "",
        is_multilingual:"",
        other_languages: ""
        });
    
    // HANDLE CHANGE FUNCTIONS:
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

        handleSaveData({ 
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
                    onChange={handleSelectChange}
                >
                    { pronouns.map(pronoun => {
                        return(
                            <MenuItem value={pronoun}>{pronoun}</MenuItem> 
                        )
                    })}
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
                <FormControl>
                    <InputLabel>Race</InputLabel>
                    <Select 
                        fullWidth
                        name="race" 
                        placeholder='Race' 
                        label='Race'
                        value=""
                        onChange={handleSelectChange}
                    >
                        { races.map(race => {
                            return(
                                <MenuItem value={race}>{race}</MenuItem> 
                            )
                        })}
                    </Select>
                </FormControl>
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
