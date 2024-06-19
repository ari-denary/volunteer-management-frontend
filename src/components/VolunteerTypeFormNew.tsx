import React from 'react';
import { FormWrapper } from './FormWrapper';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
type VolunteerInfoProps = {
  is_student: boolean;
  is_healthcare_provider: boolean;
  is_general: boolean;
  updateFields: (fields: Partial<VolunteerInfoProps>) => void;
};

function VolunteerTypeForm({
  is_student,
  is_healthcare_provider,
  is_general,
  updateFields,
}: VolunteerInfoProps) {
    const navigate = useNavigate();


  const handleClick = (volunteerType: keyof VolunteerInfoProps) => {
    updateFields({
      is_student: false,
      is_healthcare_provider: false,
      is_general: false,
      [volunteerType]: true,
    });

    // switch (volunteerType) {
    //     case 'is_student':
    //       navigate('/studentinfoform');
    //       break;
    //     case 'is_provider':
    //       navigate('/healthcareproviderinfoform');
    //       break;
    //     case 'is_general':
    //       navigate('/contactinfoform');
    //       break;
    //     default:
    //       break;
    //   }

  };

  return (
    <FormWrapper title='What type of volunteer are you?'>
      <Container component='main' maxWidth="sm" sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
          }}>
        <Box
>
        <Stack spacing={2}>
          <Button variant="contained"
            id='is_student'
            type='button'
            onClick={() => handleClick('is_student')}
          >
            Student
          </Button>

          <Button variant="contained"
            id='is_provider'
            type='button'
            onClick={() => handleClick('is_healthcare_provider')}
          >
            Healthcare Provider
          </Button>

          <Button variant="contained"
            id='is_general'
            type='button'
            onClick={() => handleClick('is_general')}
          >
            General
          </Button>
      </Stack>
      </Box>
      </Container>
    </FormWrapper>
  );
}

export default VolunteerTypeForm;
