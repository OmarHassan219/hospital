import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import Register from './components/Register/Register';
import React,{useContext} from 'react'
import { Context } from './context/ContextState';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Options from './components/Options/Options';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointementPage from './pages/AppointmentPage/AppointementPage';
import BookedPage from './pages/BookedPage/BookedPage';
import BurgerMenu from './components/Navbar/BurgerMenu';
import DoctorPage from './pages/DoctorPage/DoctorPage';
import VisitingTimes from './pages/VisitingTimes/VisitingTimes';
import Achievements from './pages/Achievements/Achievements';
import MedicalRecord from './pages/MedicalRecord/MedicalRecord';
import AdminPage from './pages/AdminPage/AdminPage';
import DoctorsVacation from './pages/DoctorsVacation/DoctorsVacation';
import Departments from './pages/departments/Departments';
import Footer from './components/Footer/Footer';
function App() {
const context = useContext(Context)
const {user,setuser,password,setpassword,userValidation,setuserValidation ,showNewReg ,  setshowNewReg , showburgermenu, setshowburgermenu} = context


  return (
    <div className="App">
      
      <BrowserRouter>
{ showburgermenu ? <BurgerMenu/> :'' }
{showNewReg ? <Register/> : '' }
      <Navbar/>
      <Routes>

      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/حجز-المواعيد" element={<AppointementPage/>}></Route>
      <Route path="/مواعيد-حجز-المريض" element={<BookedPage/>}></Route>
      <Route path="/مواعيد-حضور-الدكاترة" element={<DoctorPage/>}></Route>
      <Route path="/أوقات-الزيارة" element={<VisitingTimes/>}></Route>
      <Route path="/الإنجازات الطبية" element={<Achievements/>}></Route>
      <Route path="/السجل-الطبي" element={<MedicalRecord/>}></Route>
      <Route path="/admin/receptionist" element={<AdminPage/>}></Route>
      <Route path="/إجازة-الأطباء" element={<DoctorsVacation/>}></Route>
      <Route path="/التخصصات-المتاحة" element={<Departments/>}></Route>

      </Routes>
<Footer/>
      </BrowserRouter>

      
      {/* <Home/> */}
    </div>
  );
}

export default App;
