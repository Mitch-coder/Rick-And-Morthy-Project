import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context";

const UnprotectedRoute: FC = () => {
  const { isLoggedin } = useContext(UserContext);

  if (isLoggedin) return <Navigate to="/" replace />;

  return <Outlet />;
};

export { UnprotectedRoute };
