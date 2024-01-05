import { useState } from "react";
import CreateUserPassForm from "./CreateUserPassForm";
import ProfileInformationForm from "./ProfileInformationForm";


/** Signup -------------------------------------------------------
 *
 * State:
 * - signupData: 
 *   {
 * 	   "username": "TestUser",
 *     "password": "password", 
 *     "badge_number": 1,
 *     "email": "sample@mail.com",
 *     "first_name": "sample",
 *     "last_name": "user",
 *     "dob": "datetime.datetime(2000, 1, 1, 0, 0)",
 *     "gender": "Prefer not to say",
 *     "address": "123 Cherry lane",
 *     "city": "New York",
 *     "state": "NY",
 *     "zip_code": "11001",
 *     "phone_number": "9991234567",
 *     "is_student": true,
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
    first_name: null,
    last_name: null,
    dob: null,
    gender: null,
    address: null,
    city: null,
    state: null,
    zip_code: null,
    phone_number: null,
    is_student: null,
    is_multilingual: null
  });

  // FUNCTION DEFINITIONS FOR PROPS:

  function handleSaveUserPass(formData: object) {
    console.log("handleSaveUserPass called with formData = ", formData);

    setSignupData((signupData) => ({
      ...signupData,
      ...formData,
    }));
  }

  function handleSaveProfile(formData: object) {
    console.log("handleSaveProfile called with formData = ", formData);

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
            ? <ProfileInformationForm handleSaveProfile={handleSaveProfile} />
            : null
          }

        </>
    )
}

export default Signup;
