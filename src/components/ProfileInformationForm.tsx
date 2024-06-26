import { FormControl, InputLabel,Button,  MenuItem, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useRef, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type UserData = {
  first_name: string,
  last_name: string,
  dob: string,
  gender: string,
  pronouns: string,
  race: string,
  ethnicity: string,
  language: string,
  is_multilingual: string,
  other_languages: string
}

type CreateProfileInformationProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};



function ProfileInformationForm({ first_name,
  last_name,
  dob,
  gender,
  pronouns,
  race,
  ethnicity,
  language,
  is_multilingual,
  other_languages, updateFields
}: CreateProfileInformationProps) {
  return (
    <FormWrapper title="Profile Information">
      <Container component='main' maxWidth="sm">
        <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
            >
      <Box>
        <Grid container spacing={2} >
          <Grid item xs={6} sm={6}>
            <label>First Name:</label>
            <TextField
              id="first_name"
              placeholder="First Name"
              fullWidth
              value={first_name}
              label="First Name"
              onChange={(e) => updateFields({ first_name: e.target.value })}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
          <label>Last Name:</label>
            <TextField
              id="last_name"
              placeholder="Last Name"
              fullWidth
              value={last_name}
              label="Last Name"
              onChange={(e) =>
                updateFields({
                  last_name: e.target.value,
                })
              }
            />
          </Grid>
        
        <Grid item xs={6} sm={6}>
          <label>Gender: </label>
          <TextField
          select
          fullWidth
            name="gender"
            placeholder="Gender"
            label="Gender"
            value={gender}
            onChange={(e) =>
              updateFields({
                gender: e.target.value,
              })
            }
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="non-binary">Non-binary</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6} sm={6}>
          <label>Pronouns:</label>
          <TextField
          select
          fullWidth
            name="pronouns"
            placeholder="pronouns"
            label="Pronouns"
            value={pronouns}
            onChange={(e) =>
              updateFields({
                pronouns: e.target.value,
              })
            }
          >
            <MenuItem value="female">She/her/her</MenuItem>
            <MenuItem value="male">He/him/his</MenuItem>
            <MenuItem value="non-binary">Ze/Zir/Zem</MenuItem>
            <MenuItem>They/them/their</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <label>Date of Birth: </label>
          <TextField
            fullWidth
            id="dob"
            type="date"
            value={dob}
            onChange={(e) =>
              updateFields({
                dob: e.target.value,
              })
            }
          ></TextField>
        </Grid>
        <Grid item xs={12}>
        <label>Are you Hispanic or Latino?</label>
        <TextField
          fullWidth
          select
          name="race"
          placeholder="Race"
          label="Race"
          value={race}
          onChange={(e) =>
            updateFields({
              race: e.target.value,
            })
          }
        >
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </TextField>

        {race === "no" && (/* Conditionally render TextField for ethnicity */

          <TextField
            sx={{mt:2}}
            fullWidth
            select
            id="ethnicity"
            placeholder="Ethnicity"
            label="Ethnicity"
            value={ethnicity}
            onChange={(e) => updateFields({ ethnicity: e.target.value })}
          >
            <MenuItem value="american">American Indian or Alaska Native. ...</MenuItem>
            <MenuItem value="asian">Asian. ...</MenuItem>
            <MenuItem value="black">Black or African American. ...</MenuItem>
            <MenuItem value="hispanic">Hispanic or Latino. ...</MenuItem>
            <MenuItem value="native">Native Hawaiian or Other Pacific Islander. ...</MenuItem>
            <MenuItem value="white">White.</MenuItem>
          </TextField>
        )}

        </Grid>
        
        <Grid item xs={12}>
          <label>Language:</label>
          <TextField
            fullWidth
            select
            id="language"
            placeholder="Primary Language"
            label="Primary Language"
            value={language}
            onChange={(e) => updateFields({ language: e.target.value })}
          >

            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            id="additionalLanguage"
            placeholder="Additional Language"
            label="Additional Language"
            value={other_languages}
            onChange={(e) =>
              updateFields({ other_languages: e.target.value })
            }
          >
            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>

          </TextField>
        </Grid>
        </Grid>
        
      </Box>
      </Box>
    </Container>
    </FormWrapper>
  );
}

export default ProfileInformationForm;
