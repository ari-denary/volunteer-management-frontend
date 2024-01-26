import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';
import ProfileInformationForm from './components/ProfileInformationForm.tsx';
import StudentInformationForm from "./components/StudentInformationForm.tsx";
import HealthcareProviderForm from "./components/HealthcareProviderForm.tsx";
import ContactInformationForm from "./components/ContactInformationForm.tsx";
import VolunteerTypeForm from './components/VolunteerTypeForm.tsx';
import CollectionInfoForm from './components/CollectionInfoForm.tsx';
import ProfilePage from "./components/ProfilePage.tsx";



function App() {

  return (

    <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup">
          <Route path="" element={<Signup />} />
          <Route path="profile">
            <Route path="" element={<ProfileInformationForm />} />
            <Route path="volunteertype" element={<VolunteerTypeForm />} />
            <Route path="collectioninfoform" element={<CollectionInfoForm />} />
          </Route>
        </Route>
        <Route path="dashboard">
          <Route path="profile" element={<ProfilePage />}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  </div>




  )
}

export default App
