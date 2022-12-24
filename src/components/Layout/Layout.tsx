import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useField } from "../../hooks";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
      <>
      <Navbar/>
        <Outlet/>
      </>
  );
};

export { Layout };
