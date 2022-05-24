import { Navigate, Outlet } from "react-router-dom";

export default function DoctorOutlet() {
  const isAuth = localStorage.getItem("isAuth");
  const isDoc = localStorage.getItem("isDoc");
  return isAuth ?  <Outlet /> : <Navigate to="/login" />;
}
