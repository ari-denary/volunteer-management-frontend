import { useState } from "react";
import { FormWrapper } from "./FormWrapper";

type CreateUserData = {
  username: string;
  password: string;
  confirmPassword: string;
};

type CreateUserPassForProps = CreateUserData & {
  updateFields: (fields: Partial<CreateUserData>) => void;
};

function CreateUserPassForm({
  username,
  password,
  confirmPassword,
  updateFields,
}: CreateUserPassForProps) {
  return (
    <FormWrapper title="Create an account">
      <div>
        <div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => updateFields({ username: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => updateFields({ password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                updateFields({ confirmPassword: e.target.value })
              }
            />
          </div>
          
        </div>
      </div>
    </FormWrapper>
  );
}

export default CreateUserPassForm;

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
// function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
//   evt.preventDefault();

//   if (ensurePasswordValidation(UserData.password, UserData.confirmPassword)) {
//     handleSaveUserPass({
//       username: UserData.username,
//       password: UserData.password,
//     });
//   }
// }
