import { useState } from "react";

// INTERFACES (TYPESCRIPT):
interface CreateUserPassFormProps {
  handleSaveUserPass: (formData: object) => void;
}

/** CreateUserPassForm -------------------------------------------------------
 *
 * State:
 * - formData:
 *   {
 *    username: "",
 *    password: "",
 *    confirmPassword: "",
 *   }
 *
 * Props:
 * - handleSaveUserPass: function passed down from Signup to call upon form submission
 * 
 * Routed at:
 *   /signup/create-username
 *
 * Call list:
 *   RoutesList -> Signup --> CreateUserPassForm
 *
 */
const CreateUserPassForm: React.FC<CreateUserPassFormProps> = ({ handleSaveUserPass }) => {
  console.log("CreateUserPassForm called with handleSaveUserPass = ", handleSaveUserPass);

  // COMPONENT STATE:
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  console.log("CreateUserPassForm formData = ", formData);

  // HANDLE CHANGE FUNCTION:
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const name = evt.target.id
    const value = evt.target.value;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  // HELPER FUNCTIONS:
  function ensurePasswordValidation(password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    } else if (password.length < 8) { 
      alert("Password must be at least 8 characters");
      return false;
    }
    return true;
  }

  // HANDLE SUBMIT FUNCTION:
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log("CreateUserPassForm handleSubmit called with formData = ", formData);

    if (ensurePasswordValidation(formData.password, formData.confirmPassword)) {
      handleSaveUserPass({ 
        username: formData.username, 
        password: formData.password
      });
    }
  }

  return (
      <>
          <div>
              <h3>Create Username & Password </h3>
              <p>Pick a username for your new account</p>
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label
                          htmlFor="username"
                          className="form-label"
                      ></label>
                      <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Username"
                          onChange={handleChange}
                      />
                  </div>
                  <div className="mb-3">
                      <label
                          htmlFor="password"
                          className="form-label"
                      ></label>
                      <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          onChange={handleChange}
                      />
                  </div>
                  <div className="mb-3">
                      <label
                          htmlFor="confirmPassword"
                          className="form-label"
                      ></label>
                      <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          placeholder="Confirm your password"
                          onChange={handleChange}
                      />
                  </div>
                  <button className="btn btn-primary" type="submit">Next</button>
          </form>
       </div>
      </>
  )
}

export default CreateUserPassForm;
