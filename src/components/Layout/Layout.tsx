import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useField } from "../../hooks";
import { Navbar } from "./Navbar";

const Layout = () => {
  const searchInput = useField();
  return (
      <>
      <Navbar onChange={searchInput.onChange}/>
        <Outlet/>
      </>
  );
};

export { Layout };
