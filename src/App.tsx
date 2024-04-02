import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Login from './components/forms/Login.tsx';
import Signup from './components/forms/Signup.tsx';
import ProfileInformationForm from './components/forms/ProfileInformationForm.tsx';
import StudentInformationForm from "./components/forms/StudentInformationForm.tsx";
import HealthcareProviderForm from "./components/forms/HealthcareProviderForm.tsx";
import ContactInformationForm from "./components/forms/ContactInformationForm.tsx";
import VolunteerTypeForm from './components/forms/VolunteerTypeFormNew.tsx';
import CollectionInfoForm from './components/forms/CollectionInfoForm.tsx';
import ProfilePage from "./components/dashboard/ProfilePage.tsx";



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
            <Route path="" element={<ProfileInformationForm handleSaveData={handleSaveData}/>} />
            <Route path="volunteertype">
                  <Route path="" element={<VolunteerTypeForm handleSaveData={handleSaveData} />} />
                  <Route path="studentinfoform" element={<StudentInformationForm handleSaveData={handleSaveData} />} />
                  <Route path="healthcareproviderinfoform" element={<HealthcareProviderForm handleSaveData={handleSaveData}/>} />
                  <Route path="contactinfoform" element={<ContactInformationForm handleSaveData={handleSaveData}/>} />
            </Route>
            <Route path="collectioninfoform" element={<CollectionInfoForm handleSaveData={handleSaveData}/>}/>
          </Route>
        <Route path="dashboard"></Route>
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
