import { ChangeEvent, useContext, useState } from "react";
import { Button, Container, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../public/logo.svg";
import { CharacterList } from "../../containers/CharacterList";
import { SearchContext, useSearchContext } from "../../context";
import { useCharacters, useField } from "../../hooks";

interface Menu {
  key: string;
  href: string;
  title: string;
}

const menus: Menu[] = [
  {
    key: "home",
    href: "/home",
    title: "Home",
  },
  {
    key: "favorites",
    href: "/favorites",
    title: "Favorites",
  },
  {
    key: "report",
    href: "/report",
    title: "Report",
  },
  {
    key: "favorite-report",
    href: "/report/favorite",
    title: "Favorite Report",
  },
];

const NavItem = ({ key, href, title }: Menu) => {
  return (
    <Nav.Link
      key={key}
      as={Link}
      to={href}
      className="navbar-brand d-flex align-items-center"
    >
      <strong>{title}</strong>
    </Nav.Link>
  );
};

const Navbar = () => {
  const { searchHandler } = useSearchContext();

  const searchQueryHandler = (e: any) =>
    searchHandler(e.target.value as string);

  return (
    <div className="navbar navbar-dark bg-dark box-shadow" id="color-nav">
      <img
        src="../../../public/logo.svg"
        width="50"
        height="50"
        className="ms-4"
        alt="Logo"
      />
      <div className="container d-flex justify-content-end">
        {menus.map(NavItem)}
      </div>
      <Form className="d-flex me-4">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={searchQueryHandler}
        />
      </Form>
    </div>
  );
};

export { Navbar };
