import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import CreateUserPassForm from "./components/CreateUserPassForm.tsx";
import ProfileInformationForm from "./components/ProfileInformationForm.tsx";
import StudentInformationForm from "./components/StudentInformationForm.tsx";
import HealthcareProviderForm from "./components/HealthcareProviderForm.tsx";
import ContactInformationForm from "./components/ContactInformationForm.tsx";
import VolunteerTypeForm from "./components/VolunteerTypeFormNew.tsx";
import CollectionInfoForm from "./components/CollectionInfoForm.tsx";
import Dashboard from "./components/Dashboard.tsx";
import { useMultistepForm } from "./components/useMultistepForm.tsx";
import { FormEvent, useState } from "react";
import React, { useEffect } from "react";

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



function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isProvider, setIsProvider] = useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  useEffect(() => {
    // Logic to determine if the user is a provider
    setIsProvider(data.is_healthcare_provider); // Assuming data.is_provider holds the provider status
  }, [data.is_healthcare_provider]);




  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Login {...data} updateFields={updateFields} />,
      <CreateUserPassForm {...data} updateFields={updateFields} />,
      <ProfileInformationForm {...data} updateFields={updateFields} />,
      <VolunteerTypeForm is_provider={false} is_general={false} {...data} updateFields={updateFields}/>,
      <StudentInformationForm {...data} updateFields={updateFields} />,
      <HealthcareProviderForm {...data} updateFields={updateFields} />,
      <ContactInformationForm {...data} updateFields={updateFields} />,
      <CollectionInfoForm {...data} updateFields={updateFields} />,
      // <Dashboard {...data}  updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successfully");
  }

  return (
    <BrowserRouter>
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<Signup />} />
        {/* Define other routes here */}
      </Routes>
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
  </BrowserRouter>
);
}



export default App;
