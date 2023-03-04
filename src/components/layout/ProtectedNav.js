import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProtectedNav() {

  return (
    <>
      <Nav.Link as={Link} to='/' >
        Home
      </Nav.Link>

      <Nav.Link as={Link} to="/about" >
        About
      </Nav.Link>
      <NavDropdown title="Settings" id="basic-nav-dropdown">
        <NavDropdown.Item > <Link to="/profile">Profile</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >
          <Link to="/">Signout</Link>
        </NavDropdown.Item>
      </NavDropdown></>
  );
}