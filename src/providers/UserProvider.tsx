import { FC, PropsWithChildren, useState } from "react";
import { UserContext } from "../context";

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedin, setLogin] = useState(false);
  const performLogin = () => setLogin(true);
  const performLogout = () => setLogin(false);

  return (
    <UserContext.Provider value={{ isLoggedin, performLogin, performLogout }}>
      {children}
    </UserContext.Provider>
  );
};
