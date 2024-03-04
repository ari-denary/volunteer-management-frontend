import React from 'react';
import { FormWrapper } from './FormWrapper';
import { useNavigate } from 'react-router-dom';

type VolunteerInfoProps = {
  is_student: boolean;
  is_provider: boolean;
  is_general: boolean;
  updateFields: (fields: Partial<VolunteerInfoProps>) => void;
};

function VolunteerTypeForm({
  is_student,
  is_provider,
  is_general,
  updateFields,
}: VolunteerInfoProps) {
    const navigate = useNavigate();


  const handleClick = (volunteerType: keyof VolunteerInfoProps) => {
    updateFields({
      is_student: false,
      is_provider: false,
      is_general: false,
      [volunteerType]: true,
    });

    switch (volunteerType) {
        case 'is_student':
          navigate('/signup/studentinfoform');
          break;
        case 'is_provider':
          navigate('/signup/healthcareproviderinfoform');
          break;
        case 'is_general':
          navigate('/signup/contactinfoform');
          break;
        default:
          break;
      }

  };

  return (
    <FormWrapper title='What type of Volunteer are you?'>
      <form>
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
            onClick={() => handleClick('is_provider')}
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
      </form>
    </FormWrapper>
  );
}

export default VolunteerTypeForm;
