import ThinButton from "./ThinButton";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormWrapper } from "./FormWrapper";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { MenuItem, TextField, Typography, Button } from '@mui/material'

type formData = {
  type_of_student:
  school,
  degree,
  anticipated_graduation,
  major,
  minor,
  classification,
}



type CreateStudentInfoProps = formData & {
  updateFields: (fields: Partial<any>) => void;
};

function StudentInformationForm({
  type_of_student,
  school,
  degree,
  anticipated_graduation,
  major,
  minor,
  classification,
  updateFields,
}: CreateStudentInfoProps) {
  return (
    <FormWrapper title="Student Information">
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
          <Grid item xs={12}>
          <label htmlFor="typeOfStudent">Type of Student:</label>
          <TextField
            select
            fullWidth
            id="type_of_student"
            placeholder="Undergrad, grad, med, etc"
            label="Type of Student"
            value={type_of_student}
            onChange={(e) => updateFields({ type_of_student: e.target.value })}
          >
            <MenuItem value="undergraduate">Undergraduate</MenuItem>
            <MenuItem value="graduate">Graduate</MenuItem>
            <MenuItem value="medical">Medical</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <label>School Name:</label>
          <TextField
            fullWidth
            type="text"
            id="school"
            placeholder="School Name"
            label="School Name"
            value={school}
            onChange={(e) => updateFields({ school: e.target.value })}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <label>Degree:</label>
          <TextField
            select
            fullWidth
            id="degree"
            placeholder="Degree"
            label="Degree"
            value={degree}
            onChange={(e) =>
              updateFields({
                degree: e.target.value,
              })
            }
          >
            <MenuItem value="0">0, Elementary or Middle School</MenuItem>
            <MenuItem value="1">1, High School or Equivalency</MenuItem>
            <MenuItem value="2">2, Associates Degree</MenuItem>
            <MenuItem value="3">3, Bachelors Degree</MenuItem>
            <MenuItem value="4">4, Masters Degree</MenuItem>
            <MenuItem value="5">5, Doctorate Degree</MenuItem>
          </TextField>
        </Grid>
        
          
          <Grid item xs={6}>
          <label>Graduation Month:</label>
          <TextField
            fullWidth
            id="anticipated_graduation"
            placeholder="Month"
            label="Month"
            value={anticipated_graduation}
            onChange={(e) => {
              updateFields({
                anticipated_graduation: e.target.value,
              });
            }}
          /> 
          </Grid>
          <Grid item xs={6}>
          <label>Graduation Year:</label>
          <TextField
            fullWidth
            id="year"
            placeholder="Year"
            label="Year"
            onChange={(e) => {
              updateFields({
                major: e.target.value,
              });
            }}
         />
        
        </Grid>
        <Grid item xs={12}>
          <label>Major:</label>
          <TextField
            fullWidth
            id="major"
            placeholder="Major"
            label="Major"
            value={major}
            onChange={(e) =>
              updateFields({
                major: e.target.value,
              })
            }
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <label>Minor:</label>
          <TextField
            fullWidth
            id="minor"
            placeholder="Minor"
            label="Minor"
            value={minor}
            onChange={(e) =>
              updateFields({
                minor: e.target.value,
              })
            }
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <label>Classification:</label>
          <TextField
            select
            fullWidth
            name="classification"
            id="classification"
            placeholder="Classification"
            label="Classification"
            value={classification}
            onChange={(e) =>
              updateFields({
                classification: e.target.value,
              })
            }
          >
            <MenuItem value="freshman">Freshman</MenuItem>
            <MenuItem value="sophomore">sophomore</MenuItem>
            <MenuItem value="junior">junior</MenuItem>
            <MenuItem value="etc.">etc.</MenuItem>
          </TextField>
      </Grid>
      </Grid>
      </Box>
      </Box>
      </Container>
    </FormWrapper>
  );
}

export default StudentInformationForm;
