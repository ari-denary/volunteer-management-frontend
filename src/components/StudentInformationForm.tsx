import ThinButton from "./ThinButton";
import Button from "@mui/material/Button";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormWrapper } from "./FormWrapper";


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
      <form>
        <div>
          <label htmlFor="typeOfStudent">Type of Student:</label>
          <Select
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
          </Select>
        </div>
        <div>
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
        </div>
        <div>
          <label>Degree:</label>
          <Select
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
          </Select>
        </div>
        <div>
          <label>Anticipated Graduation:</label>
          <TextField
            id="anticipated_graduation"
            placeholder="Month"
            label="Month"
            value={anticipated_graduation}
            onChange={(e) => {
              updateFields({
                anticipated_graduation: e.target.value,
              });
            }}
          ></TextField>
          <TextField
            id="year"
            placeholder="Year"
            label="Year"
            onChange={(e) => {
              updateFields({
                major: e.target.value,
              });
            }}
          ></TextField>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <label>Classification:</label>
          <Select
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
          </Select>
          <button>Next</button>
        </div>
      </form>
    </FormWrapper>
  );
}

export default StudentInformationForm;
