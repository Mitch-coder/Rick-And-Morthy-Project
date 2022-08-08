import {FC,useContext} from "react";
import { Navigate,Outlet } from "react-router-dom";
import UserContext from "../types/UserContext";

const ProtectedRoute:FC = () => {
    const { isLoggedin } = useContext(UserContext)
    if(!isLoggedin) {
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>
}

export default ProtectedRoute

