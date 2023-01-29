import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userName = sessionStorage.getItem("user");
  const token = userName && JSON.parse(userName)?.token;

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
