import { Button, Container, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../public/logo.svg";
import { CharacterList } from "../../containers/CharacterList";
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

interface Props{

}

const Navbar = ({onChange}:{
    onChange: React.ChangeEventHandler;
}) => {
 const searchInput = useField();
  const { characters, loading } = useCharacters();
  
  if (loading) return <>Cargando Personajes de Rick y Morty</>;

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
                  <Form.Control {...searchInput}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="success">Search</Button>
                </Form>
    </div>
  );
};

export { Navbar };
