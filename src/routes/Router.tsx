import { FC, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../hooks/ProtectedRoute";
import About from "../pages/about/About";
import AuthPage from "../pages/auth/AuthPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import UserContext from "../types/UserContext";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Route>
    </Routes>
  );
};

export default Router;
