import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Menu {
  key: string;
  href: string;
  title: string;
}

const menus: Menu[] = [
  {
    key: "home",
    href: "/",
    title: "Home",
  },
  {
    key: "about",
    href: "/about",
    title: "About",
  },
  {
    key: "dashboard",
    href: "/dashboard",
    title: "Dashboard",
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
  return (
    <div className="navbar navbar-dark bg-dark box-shadow">
      <div className="container d-flex justify-content-between">
        {menus.map(NavItem)}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </div>
  );
};

export { Navbar };
