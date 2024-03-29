import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';
import ProfileInformationForm from './components/ProfileInformationForm.tsx';
import StudentInformationForm from "./components/StudentInformationForm.tsx";
import HealthcareProviderForm from "./components/HealthcareProviderForm.tsx";
import ContactInformationForm from "./components/ContactInformationForm.tsx";
import VolunteerTypeForm from './components/VolunteerTypeFormNew.tsx';
import CollectionInfoForm from './components/CollectionInfoForm.tsx';



function App() {
  const handleSaveData = (formData: object) => {
    // Implement your logic to save data
    console.log('Saving data:', formData);
  };
  return (

    <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup">
          <Route path="" element={<Signup />} />
          <Route path="profile">
            <Route path="" element={<ProfileInformationForm />} />
            <Route path="volunteertype">
                  <Route path="" element={<VolunteerTypeForm handleSaveData={handleSaveData} />} />
                  <Route path="studentinfoform" element={<StudentInformationForm/>} />
                  <Route path="healthcareproviderinfoform" element={<HealthcareProviderForm handleSaveData={handleSaveData}/>} />
                  <Route path="contactinfoform" element={<ContactInformationForm/>} />
            </Route>
            <Route path="collectioninfoform" element={<CollectionInfoForm handleSaveData={handleSaveData}/>}/>
          </Route>
        <Route path="dashboard"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
