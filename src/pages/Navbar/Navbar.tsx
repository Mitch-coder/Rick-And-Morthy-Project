import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarExample = () =>{
    return(  <div className="navbar navbar-dark bg-dark box-shadow">
    <div className="container d-flex justify-content-between">
     <a href="#" className="navbar-brand d-flex align-items-center">
      <strong>Example-Login</strong>
     </a>
     <a href="/dashboard" className="navbar-brand d-flex align-items-center">
      <strong>Dashboard</strong>
     </a>
     <a href="/about" className="navbar-brand d-flex">
      <strong>About</strong>
     </a>
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
    )
}

export default NavbarExample

