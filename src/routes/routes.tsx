import { FC, useContext } from "react";
import { PrivateRoutes, PublicRoutes } from ".";
import { UserContext } from "../context";

const Routes: FC = () => {
  const { isLoggedin } = useContext(UserContext);
  return <>{isLoggedin ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export { Routes };
