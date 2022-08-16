import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context";

const ProtectedRoute: FC = () => {
  const { isLoggedin } = useContext(UserContext);

  if (!isLoggedin) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export { ProtectedRoute };
