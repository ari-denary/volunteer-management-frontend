import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import ProfileInformationForm from "./components/ProfileInformationForm.tsx";
import StudentInformationForm from "./components/StudentInformationForm.tsx";
import HealthcareProviderForm from "./components/HealthcareProviderForm.tsx";
import ContactInformationForm from "./components/ContactInformationForm.tsx";
import VolunteerTypeForm from "./components/VolunteerTypeForm.tsx";
import CollectionInfoForm from "./components/CollectionInfoForm.tsx";
import Dashboard from "./components/Dashboard.tsx";
import { useMultistepForm } from "./components/useMultistepForm.tsx";



function App() {
  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([<Login />, <Signup />,<ContactInformationForm />])
  // const handleSaveData = (formData: object) => {
  //   // Implement your logic to save data
  //   console.log('Saving data:', formData);
  // };
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem"}}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div style={{
          marginTop: "1rem",
          display: "flex",
          gap: ".5rem",
          justifyContent: "flex-end",
        }}
        >
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="button" onClick={next}> {isLastStep ? "Finish" : "Next"}</button>
        </div>

      </form>
    </div>

    //   <div className='container'>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="login" element={<Login />} />
    //       <Route path="signup">
    //         <Route path="" element={<Signup />} />
    //         <Route path="profile">
    //           <Route path="" element={<ProfileInformationForm />} />
    //           <Route path="volunteertype">
    //                 <Route path="" element={<VolunteerTypeForm handleSaveData={handleSaveData} />} />
    //                 <Route path="studentinfoform" element={<StudentInformationForm/>} />
    //                 <Route path="healthcareproviderinfoform" element={<HealthcareProviderForm handleSaveData={handleSaveData}/>} />
    //                 <Route path="contactinfoform" element={<ContactInformationForm/>} />
    //           </Route>
    //           <Route path="collectioninfoform" element={<CollectionInfoForm handleSaveData={handleSaveData}/>}/>
    //         </Route>
    //       </Route>
    //       <Route path="dashboard" element={<Dashboard/>}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
