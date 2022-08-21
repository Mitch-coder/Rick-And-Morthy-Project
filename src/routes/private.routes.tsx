import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { About, Dashboard, Home } from "../pages";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='dashboard' element={<Dashboard />} />
      
      <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
