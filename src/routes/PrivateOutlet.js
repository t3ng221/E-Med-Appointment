import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutlet() {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
