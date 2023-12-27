import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';
import ProfileInformationForm from './components/ProfileInformationForm.tsx';
import StudentInformationForm from "./components/StudentInformationForm.tsx";
import HealthcareProviderForm from "./components/HealthcareProviderForm.tsx";
import ContactInformationForm from "./components/ContactInformationForm.tsx";


function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup/">
            <Route path="" element={<Signup />} />
            <Route path="profile" element={<ProfileInformationForm />} />
          </Route>
          <Route path="volunteer/">
            <Route path="student" element={<StudentInformationForm/>}/>
            <Route path="provider" element={<HealthcareProviderForm/>}/>
            <Route path="general" element={<ContactInformationForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>




  )
}

export default App
