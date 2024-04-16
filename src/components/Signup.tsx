import CreateUserPassForm from "./CreateUserPassForm";
import ProfileInformationForm from "./ProfileInformationForm";
import VolunteerTypeForm from "./VolunteerTypeFormNew";
import StudentInformationForm from "./StudentInformationForm";
import HealthcareProviderForm from "./HealthcareProviderForm";
import ContactInformationForm from "./ContactInformationForm";
import CollectionInfoForm from "./CollectionInfoForm";
import { useMultistepForm } from "./useMultistepForm";
import { FormEvent, useState, useEffect } from "react";

type FormData= {
  username: string;
  password: string;
  confirmPassword: string;
  badge_number: string;
  email: string;
  school_email: string;
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  pronouns: string;
  race: string;
  ethnicity: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone_number: string;
  phone_carrier: string;
  is_student: boolean;
  is_healthcare_provider: boolean;
  is_multilingual: string;
  language: string;
  other_languages: string;
  personal_info: boolean;
    contact_info: boolean;
    accuracy: boolean;
    certify: boolean
};

const INITIAL_DATA: FormData = {
  username: "",
  password: "",
  confirmPassword: "",
  badge_number: "",
  email: "",
  school_email: "",
  first_name: "",
  last_name: "",
  dob: "",
  gender: "",
  pronouns: "",
  race: "",
  ethnicity: "",
  address: "",
  city: "",
  state: "",
  zip_code: "",
  phone_number: "",
  phone_carrier: "",
  is_student: true,
  is_healthcare_provider: false,
  is_multilingual: "",
  language: "",
  other_languages: "",
  personal_info: true,
    contact_info: false,
    accuracy: false,
    certify: false
};

/** Signup -------------------------------------------------------
 *
 * State:
 * - signupData:
 *   {
 * 	   "username": "TestUser",
 *     "password": "password",
 *     "badge_number": 1,
 *     "email": "sample@email.com",
 *     "school_email": "sample@email.com",
 *     "first_name": "sample",
 *     "last_name": "user",
 *     "dob": "datetime.datetime(2000, 1, 1, 0, 0)",
 *     "gender": "Prefer not to say",
 *     "race": null,
 *     "ethnicity": null,
 *     "address": "123 Cherry lane",
 *     "city": "New York",
 *     "state": "NY",
 *     "zip_code": "11001",
 *     "phone_number": "9991234567",
 *     "phone_carrier": "AT&T",
 *     "volunteer_type": "Student",
 *     "is_multilingual": false
 *    }
 *
 * Props:
 * - None
 *
 * Functions defined
 * - handleSaveUserPass: function passed to CreateUserPassForm
 * - handleSaveProfile: function passed to ProfileInformationForm
 *
 * Routed at:
 *   /signup
 *
 * Call list:
 *   RoutesList -> Signup --> CreateUserPassForm --> ProfileInformationForm
 */
function Signup(): JSX.Element {
    const [data, setData] = useState(INITIAL_DATA);
    const [isProvider, setIsProvider] = useState(false);


      useEffect(() => {
      // Logic to determine if the user is a provider
      setIsProvider(data.is_healthcare_provider); // Assuming data.is_provider holds the provider status
  }, [data.is_healthcare_provider]);

    function onSubmit(e: FormEvent) {
      e.preventDefault();
      if (!isLastStep) return next();
      alert("Successfully");
    }

    function updateFields(fields: Partial<FormData>) {
      setData((prev) => {
        return { ...prev, ...fields };
      });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      // <Login {...data} updateFields={updateFields} />,
      <CreateUserPassForm {...data} updateFields={updateFields} />,
      <ProfileInformationForm {...data} updateFields={updateFields} />,
      <VolunteerTypeForm is_student={false} is_healthcare_provider={false} is_general={false} {...data} updateFields={updateFields}/>,

      <StudentInformationForm  type_of_student={undefined} degree={undefined} anticipated_graduation={undefined} major={undefined} minor={undefined} classification={undefined} {...data} updateFields={updateFields} />,
      <HealthcareProviderForm {...data} updateFields={updateFields} />,
      <ContactInformationForm {...data} updateFields={updateFields} />,
      <CollectionInfoForm {...data} updateFields={updateFields} />,
      // <Dashboard {...data}  updateFields={updateFields} />,
    ], data.is_student, data.is_healthcare_provider);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit"> {isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
