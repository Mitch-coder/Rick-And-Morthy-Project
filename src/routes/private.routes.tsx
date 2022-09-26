import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Favorites, Home } from "../pages";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
      <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};
const r = 1 + '1'
export { PrivateRoutes };
