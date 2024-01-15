import { useState } from "react";
import CreateUserPassForm from "./CreateUserPassForm";
import ProfileInformationForm from "./ProfileInformationForm";
import ContactInformationForm from "./ContactInformationForm";
import VolunteerTypeForm from "./VolunteerTypeForm";


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

function Signup() {

  // COMPONENT STATE:
  const [signupData, setSignupData] = useState({
    username: null,
    password: null,
    badge_number: null,
    email: null,
    school_email: null,
    first_name: null,
    last_name: null,
    dob: null,
    gender: null,
    race: null,
    ethnicity: null,
    address: null,
    city: null,
    state: null,
    zip_code: null,
    phone_number: null,
    phone_carrier: null,
    volunteer_type: null,
    is_multilingual: null,
    language: null,
    other_languages: null,
  });

  // FUNCTION DEFINITIONS FOR PROPS:
  function handleSaveUserPass(formData: object) {
    console.log("handleSaveUserPass called with formData = ", formData);
    console.log("SIGN UP DATA", signupData)
    setSignupData((signupData) => ({
      ...signupData,
      ...formData,
    }));
  }

  /**  CONDITIONAL RENDERING:
   *   - If no username in state, render CreateUserPassForm to user 
   *     (shows create username and password form)
   *   - 
  */
    return (
        <>
          {
            signupData.username === null  
            ? <CreateUserPassForm handleSaveUserPass={handleSaveUserPass} /> 
            : signupData.first_name === null 
            ? <ProfileInformationForm handleSaveData={handleSaveUserPass} />
            : signupData.volunteer_type === null
            ? <VolunteerTypeForm handleSaveData={handleSaveUserPass}/> 
            : signupData.volunteer_type === "General" 
            ? <ContactInformationForm handleSaveData={handleSaveUserPass}/>
            : null
          }

        </>
    )
}

export default Signup;
