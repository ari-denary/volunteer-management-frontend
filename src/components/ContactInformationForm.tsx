import ThinButton from './ThinButton'
import { MenuItem, TextField } from '@mui/material'

const ContactInformationForm = () => {
  return (
    <div>
        <h1>Contact Information</h1>
        <form>
            <div>
                <label>Email:</label>
                <TextField fullWidth id="email" placeholder='Email' label='Email'/>
            </div>
            <div>
                <label>School Email:</label>
                <TextField fullWidth id="email" placeholder='School Email' label='School Email'/>
            </div>
            <div>
                <label>Phone Number:</label>
                <TextField fullWidth id="phoneNumber" placeholder='Phone Number' label='Phone Number'/>

                <label>Phone Carrier:</label>
                <TextField select id="phoneCarrier" placeholder='Phone Carrier' label='Phone Carrier'>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                    <MenuItem>-</MenuItem>
                </TextField>
            </div>
           <div>


            <label>Mailing Adress:</label>
                <div>
                    <label>Address:</label>
                    <TextField fullWidth id="line1" label='Line 1' size='small'/>
                    <TextField fullWidth id="line2" label='Line 2' size='small'/>
                    <TextField id="city" label='City' size='small'/>
                    <TextField id="state" label='State' size='small'/>
                    <TextField id="zipCode" label='Zip Code' size='small'/>
                </div>
           </div>
        <ThinButton text='Next'/>
        </form>
    </div>
  )
}

export default ContactInformationForm
