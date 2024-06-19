import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";

function App() {

//if logged in, go to dashboard at /dashboard
//if not logged in, go to login page at /login
//if click sign up, go to sign up page at /signup

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
        <Route path="/login" element={<Login username={""} password={""} updateFields={function (fields: Partial<{ username: string; password: string; }>): void {
            throw new Error("Function not implemented.");
          } } />} />
        <Route path="/signup" element={<Signup />} />
         {/* <Route path="/studentinfoform" element={<StudentInformationForm type_of_student={undefined} degree={undefined} anticipated_graduation={undefined} major={undefined} minor={undefined} classification={undefined} updateFields={function (fields: Partial<any>): void {
            throw new Error("Function not implemented.");
          } } /> } />
         <Route path="/healthcareproviderinfoform" element={<HealthcareProviderForm /> } />
         <Route path="/contactinfoform" element={<ContactInformationForm email={""} school_email={""} address={""} city={""} state={""} zip_code={""} phone_number={""} phone_carrier={""} updateFields={function (fields: Partial<{ email: string; school_email: string; address: string; city: string; state: string; zip_code: string; phone_number: string; phone_carrier: string; }>): void {
            throw new Error("Function not implemented.");
          } } /> } /> */}



      </Routes>

    </div>
  </BrowserRouter>
);
}


export default App;
