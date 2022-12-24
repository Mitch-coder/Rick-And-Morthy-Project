import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { SearchContext } from "../context";
import { Favorites, Home } from "../pages";
import { SearchProvider } from "../providers/SearchProvider";

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
