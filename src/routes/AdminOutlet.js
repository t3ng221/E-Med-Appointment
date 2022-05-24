import { Navigate, Outlet } from "react-router-dom";

export default function AdminOutlet() {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth  ? <Outlet /> : <Navigate to="/login" />;
}
