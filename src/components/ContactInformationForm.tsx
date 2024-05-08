import { MenuItem, TextField, Typography, Button } from '@mui/material'
import { useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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

    // HANDLE CHANGE FUNCTIONS:
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const name = evt.target.id
        const value = evt.target.value;
        setFormData((fData) => ({
          ...fData,
          [name]: value,
        }));
      }
    
    // const handleSelectChange = (evt: SelectChangeEvent<typeof formData>) => {
    //     const name = evt.target.name
    //     const value = evt.target.value;
    //     setFormData((fData) => ({
    //         ...fData,
    //         [name]: value,
    //         }));
    //     };
        
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
        <Container component='main'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
            <Typography variant='h4' component="h2">Contact Information</Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    {/* <label>Email:</label> */}
                    <TextField fullWidth id="email" label='Email' onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    {/* <label>School Email:</label> */}
                    <TextField fullWidth id="school_email" label='School Email' onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    {/* <label>Phone Number:</label> */}
                    <TextField 
                        fullWidth 
                        id="phone_number" 
                        label='Phone Number'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    {/* <label>Phone Carrier:</label> */}
                    <TextField
                        select
                        fullWidth
                        name="phone_carrier" 
                        label='Phone Carrier'
                        onChange={handleChange}
                        value=""
                    >
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem>-</MenuItem>
                    </TextField>
                </Grid>
                <label>Mailing Adress:</label>
                <Grid item xs={12}>

                    
                        <TextField fullWidth id="address" label='Address' size='small' onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>

                        <TextField id="city" label='City' fullWidth size='small' onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="state" label='State' fullWidth size='small' onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="zip_code" label='Zip Code' size='small' onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                    <Button type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    > Next
                    </Button>
                </Grid>
                </Grid>
            </Box>
        </Box>
        </Container>
    )
}

export default ContactInformationForm
