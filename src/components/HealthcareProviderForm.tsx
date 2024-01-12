import { MenuItem, TextField } from '@mui/material';
import ThinButton from './ThinButton';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';



// INTERFACES (TYPESCRIPT):
interface CreateProviderInformationProps {
    handleSaveData: (formData: object) => void;
  }

// ARRAY OF PROVIDER, DEGREE:
const providers = ["physician", "nurse", "etc"]
const employer = ["yes", "no"]
const degrees = ["BS", "BA", "MD", "DO", "MPH", "etc"]



const HealthcareProviderForm: React.FC<CreateProviderInformationProps> = ({handleSaveData}) => {
    console.log("CreateProviderInformationProps called with handleSaveData = ", handleSaveData);


    //COMPONENT STATE:
    const [formData, setFormData] = useState({
        type_of_provider: "",
        employer: "",
        degree: ""
    });



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
        console.log("HealthcareProviderForm handleSubmit called with formData = ''", formData);

        handleSaveData({
            type_of_provider: formData.type_of_provider,
            employer: formData.employer,
            degree: formData.degree
        })
      }

  return (
    <div>
        <h1>Healthcare Provider Information</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Type of Provider</label>
                <Select name="providers" fullWidth id="typeOfProvider" placeholder='Physician, Nurse, etc' label='Physician, Nurse, etc' onChange={handleSelectChange} value={undefined}>

                    {providers.map(provider=>{
                        return(
                            <MenuItem key={provider} value={provider}>{provider}</MenuItem>
                        )
                    })}
     </Select>
            </div>
            <div>
                <label>Employer</label>
                <Select name="employer" fullWidth  id="employer" placeholder='Employer' label='Employer' onChange={handleSelectChange} value={undefined}>
                    {employer.map(e => {
                        return (
                        <MenuItem key={e} value={e}>{e}</MenuItem>)

                    })}



                </Select>
            </div>
            <div>
                <label>Degree</label>
                <Select fullWidth id="Degree" placeholder='Degree (BS, BA, MD, DO, MPH, etc)' label='Degree (BS, BA, MD, DO, MPH, etc)' onChange={handleSelectChange} value={undefined}>
                    {degrees.map(degree=> {
                        return <MenuItem key={degree} value={degree}>{degree}</MenuItem>
                    })}



                </Select>
            </div>
            <ThinButton text='Next' />
        </form>
    </div>
  )
}

export default HealthcareProviderForm
