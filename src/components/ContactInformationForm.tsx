import ThinButton from './ThinButton'
import { MenuItem, TextField } from '@mui/material'
import { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';

// TYPESCRIPT INTERFACE
interface ContactInformationProps {
    handleSaveData: (formData: object) => void;
  }


/** ContactInformationForm -------------------------------------------------------
 *
 * State:
 * - formData:
 *   {
        email: "",
        school_email: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        phone_number: "",
        phone_carrier: ""
 *   }
 *
 * Props:
 * - handleSaveData: function passed down from Signup to call upon form submission
 * 
 * Routed at:
 *   /signup
 *
 * Call list:
 *   RoutesList -> Signup --> CreateUserPassForm --> ProfileInformationForm --> ContactInformationForm
 *
 */
const ContactInformationForm: React.FC<ContactInformationProps> = ({ handleSaveData }) => {

    // COMPONENT STATE:
    const [formData, setFormData] = useState({
        email: "",
        school_email: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        phone_number: "",
        phone_carrier: ""
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
        
    console.log("ContactInformationForm formData = ", formData);

    // HANDLE SUBMIT FUNCTION:
    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("CreateUserPassForm handleSubmit called with formData = ", formData);

        handleSaveData({ 
            email: formData.email,
            school_email: formData.school_email,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip_code: formData.zip_code,
            phone_number: formData.phone_number,
            phone_carrier: formData.phone_carrier
        });
    }

    return (
        <div>
            <h1>Contact Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <TextField fullWidth id="email" placeholder='Email' label='Email' onChange={handleChange}/>
                </div>
                <div>
                    <label>School Email:</label>
                    <TextField fullWidth id="school_email" placeholder='School Email' label='School Email' onChange={handleChange}/>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <TextField 
                        fullWidth 
                        id="phone_number" 
                        placeholder='Phone Number' 
                        label='Phone Number'
                        onChange={handleChange}
                    />

                    <label>Phone Carrier:</label>
                    <Select
                        name="phone_carrier" 
                        placeholder='Phone Carrier' 
                        label='Phone Carrier'
                        onChange={handleSelectChange}
                        value=""
                    >
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                </Select>
                </div>
                <div>

                <label>Mailing Adress:</label>
                    <div>
                        <label>Address:</label>
                        <TextField fullWidth id="address" label='Address' size='small' onChange={handleChange}/>
                        <TextField id="city" label='City' size='small' onChange={handleChange}/>
                        <TextField id="state" label='State' size='small' onChange={handleChange}/>
                        <TextField id="zip_code" label='Zip Code' size='small' onChange={handleChange}/>
                    </div>
                </div>
            <ThinButton text='Next'/>
            </form>
        </div>
    )
}

export default ContactInformationForm
