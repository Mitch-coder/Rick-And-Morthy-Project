import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/login "/> }/>
    </Routes>
  );
};

export { PublicRoutes };
