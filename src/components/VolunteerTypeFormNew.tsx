import React from 'react';
import { FormWrapper } from './FormWrapper';
import { useNavigate } from 'react-router-dom';

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
    <FormWrapper title='What type of Volunteer are you?'>
      <div>
        <div className='buttonContainer'>
          <button
            id='is_student'
            type='button'
            onClick={() => handleClick('is_student')}
          >
            Student
          </button>
        </div>
        <div className='buttonContainer'>
          <button
            id='is_provider'
            type='button'
            onClick={() => handleClick('is_healthcare_provider')}
          >
            Healthcare Provider
          </button>
        </div>
        <div className='buttonContainer'>
          <button
            id='is_general'
            type='button'
            onClick={() => handleClick('is_general')}
          >
            General
          </button>
        </div>
      </div>
    </FormWrapper>
  );
}

export default VolunteerTypeForm;
