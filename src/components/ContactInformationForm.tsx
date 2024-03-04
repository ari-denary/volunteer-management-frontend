import ThinButton from './ThinButton'
import { MenuItem, TextField } from '@mui/material'
import { useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormWrapper } from './FormWrapper';


type FormData = {
      email: string,
        school_email: string,
        address: string,
        city: string,
        state: string,
        zip_code: string,
        phone_number: string,
        phone_carrier: string
}

type ContactInformationProps = FormData &  {
    updateFields: (fields: Partial<FormData>) => void;
  }



function ContactInformationForm(
    {   email,
        school_email,
        address,
        city,
        state,
        zip_code,
        phone_number,
        phone_carrier,
        updateFields,
    }: ContactInformationProps
){
     return (
        <FormWrapper title='Contact Information'>

            <form>
                <div>
                    <label>Email:</label>
                    <TextField fullWidth id="email" placeholder='Email' label='Email' value={email} onChange={(e)=> updateFields({
                        email:e.target.value
                    })}/>
                </div>
                <div>
                    <label>School Email:</label>
                    <TextField fullWidth id="school_email" placeholder='School Email' label='School Email' value={school_email} onChange={(e)=>updateFields ({ school_email: e.target.value

                    })}/>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <TextField
                        fullWidth
                        id="phone_number"
                        placeholder='Phone Number'
                        label='Phone Number'
                        value={phone_number}
                        onChange={(e) => updateFields ({
                            phone_number: e.target.value


                        })}
                    />

                    <label>Phone Carrier:</label>
                    <Select
                        name="phone_carrier"
                        placeholder='Phone Carrier'
                        label='Phone Carrier'
                        value={phone_carrier}
                        onChange={(e)=> updateFields({
                            phone_carrier: e.target.value

                        })}

                    >
                        <MenuItem value="t_mobile">T-Mobile</MenuItem>
                        <MenuItem value="verizon">Verizon</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                </Select>
                </div>
                <div>

                <label>Mailing Adress:</label>
                    <div>
                        <label>Address:</label>
                        <TextField fullWidth id="address" label='Address' size='small' value={address} onChange={(e)=> updateFields ({
                            address: e.target.value

                        })}/>
                        <TextField id="city" label='City' size='small' value={city} onChange={(e)=>updateFields({
                          city: e.target.value
                        })}/>
                        <TextField id="state" label='State' size='small' value={state} onChange={(e)=> updateFields({
                            state: e.target.value
                        })}/>
                        <TextField id="zip_code" label='Zip Code' size='small' value={zip_code} onChange={(e)=>updateFields({
                            zip_code: e.target.value
                        })}/>
                    </div>
                </div>

            </form>
        </FormWrapper>
    )
}

export default ContactInformationForm
