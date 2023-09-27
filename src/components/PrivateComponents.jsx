import { Navigate, Outlet } from "react-router-dom";
function PrivateComponents() {
  const customer = localStorage.getItem("customer");
  const agency = localStorage.getItem("agency");
  return (agency || customer) ? <Outlet /> : <Navigate to="/register" />;
}

export default PrivateComponents;
