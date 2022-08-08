import { createContext } from "react";

interface Iuser {
    isLoggedin: boolean;
    performLogin: () => void;
    performLogout: () => void;
}

const UserContext = createContext<Iuser>(
    {
        isLoggedin:false,
        performLogin: () =>{},
        performLogout: () =>{}
    }
)

export default UserContext