import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Navigation from "./shared/Navigation/Navigation";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import { useState } from "react";
import { useEffect } from "react";
import DoctorsList from "./pages/DoctorsList/DoctorsList";
import Login from "./pages/Registration/Login";
import Test from "./pages/Test";
import Appointment from "./pages/Appointment/Appointment";
import MyAppointment from "./pages/MyAppointment/MyAppointment";
import Docx from "./usersx/Doctor/Docx";
import AddNewDoctor from "./usersx/Admin/AddNewDoctor/AddNewDoctor";
import ManageDoctor from "./usersx/Admin/ManageDoctor/ManageDoctor";
import PatientDetails from "./usersx/Admin/PatientDetails/PatientDetails";
import MultiUpload from "./pages/MultiUpload/MultiUpload";
import Loading from "./component/Loading/Loading";
import ViewPresData from "./usersx/Doctor/ViewPresData";
import CreatePrescription from "./usersx/Doctor/CreatePrescription";
import EMPmain from "./pages/EmedicPrescription/EMPmain";
import PrivateOutlet from "./routes/PrivateOutlet";
import DoctorOutlet from "./routes/DoctorOutlet";
import AdminOutlet from "./routes/AdminOutlet";
import { MemoryRouter } from "react-router";
import DocotorLogin from "./pages/Registration/DoctorLogin";
import Lab from "./pages/Lab";
import UserProfile from "./usersx/Admin/UserProfile/UserProfile";
import ManageAdmins from "./usersx/Admin/ManageAdmins/ManageAdmins";
function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  return (
    <div className={load ? "App" : ""}>
      {load ? (
        <Loading />
      ) : (
        <AuthProvider>
          <MemoryRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/doctors" element={<DoctorsList />} />
              <Route path="/emedic" element={<Test />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/doctorlogin" element={<DocotorLogin />} />
              <Route path="/lab" element={<Lab />} />
              <Route path="/*" element={<PrivateOutlet />}>
                <Route path="appointment/:pakId" element={<Appointment />} />
                <Route path="empres" element={<EMPmain />} />
                <Route path="myappointment" element={<MyAppointment />} />
                <Route path="myprescription" element={<MultiUpload />} />
              </Route>
              <Route path="/" element={<DoctorOutlet />}>
                <Route path="docdash" element={<Docx />} />
                <Route
                  path="create-prescription/:doctor/:mail/:name/:id"
                  element={<CreatePrescription />}
                />
                <Route
                  path="docdash/viewpdata/:mail/:name"
                  element={<ViewPresData />}
                />
              </Route>
              <Route path="/*" element={<AdminOutlet />}>
                <Route path="mngdoctors" element={<ManageDoctor />} />
                <Route path="pdetails" element={<PatientDetails />} />
                <Route path="addnewdoctor" element={<AddNewDoctor />} />
                <Route path="user-profile" element={<UserProfile />} />
                <Route path="mngadmins" element={<ManageAdmins />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
