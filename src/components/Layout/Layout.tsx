import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
      <>
      <Navbar />
      <section>
        <Outlet/>
      </section>
      </>
  );
};

export { Layout };
