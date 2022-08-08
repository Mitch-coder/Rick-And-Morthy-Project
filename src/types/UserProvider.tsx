import {FC,PropsWithChildren,useState} from "react"
import UserContext from "./UserContext"

interface UserProviderProps{}

export const UserProvider: FC<PropsWithChildren<UserProviderProps>> =({
        children,
    }) =>{
    const [isLoggedin,setLogin] = useState<boolean>(false)
    const performLogin = () => setLogin(true)
    const performLogout = () =>setLogin(false)
    
    return (
        <UserContext.Provider value = {{isLoggedin,performLogin,performLogout}}>
        {children}
        </UserContext.Provider>
    )
}
