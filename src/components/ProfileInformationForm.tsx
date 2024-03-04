import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useRef, useState } from "react";
import { FormWrapper } from "./FormWrapper";

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
      <form>
        <div>
          <label>Name:</label>
          <TextField
            id="first_name"
            placeholder="First Name"
            size="small"
            value={first_name}
            onChange={(e) => updateFields({ first_name: e.target.value })}
          />
          <TextField
            id="last_name"
            placeholder="Last Name"
            size="small"
            value={last_name}
            onChange={(e) =>
              updateFields({
                last_name: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Gender: </label>
          <Select
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
          </Select>
          <label>Pronouns: </label>
          <Select
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
          </Select>
        </div>
        <div>
          <label>Date of Birth: </label>
          <input

            id="dob"
            value={dob}
            onChange={(e) =>
              updateFields({
                dob: e.target.value,
              })
            }
          ></input>
        </div>
        <label>Are you Hispanic or Latino?</label>
        <Select
          fullWidth
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
        </Select>

        {race === "no" && (/* Conditionally render TextField for ethnicity */

          <TextField
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
        <div>
          <label>Language:</label>
          <TextField
            fullWidth
            id="language"
            placeholder="Primary Language"
            label="Primary Language"
            value={language}
            onChange={(e) => updateFields({ language: e.target.value })}
          ></TextField>
          <TextField
            fullWidth
            id="additionalLanguage"
            placeholder="Additional Language"
            label="Additional Language"
            value={other_languages}
            onChange={(e) =>
              updateFields({ other_languages: e.target.value })
            }
          ></TextField>
        </div>
        <button className="btn btn-primary" type="submit" />
      </form>
    </FormWrapper>
  );
}

export default ProfileInformationForm;
