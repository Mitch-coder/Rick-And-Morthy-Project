import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { SearchContext } from "../context";
import { Favorites, Home } from "../pages";
import { SearchProvider } from "../providers/SearchProvider";
import { Report } from "../pages/report/Report";
import FavoriteReport from "../pages/favorite-report/FavoriteReport";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='report' element={<Report />} />
        <Route path='report/favorite' element={<FavoriteReport />} />
      <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};
export { PrivateRoutes };
