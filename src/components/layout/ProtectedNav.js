import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function ProtectedNav({checkUserToken}) {
  const navigate = useNavigate();
  const signOut = () => {
    console.log('protected routed hit')
    localStorage.clear();
    checkUserToken();
    setTimeout(()=> {
      navigate('/login')
    },500)
  }

  return (
    <>
      <Nav.Link as={Link} to='/' >
        Home
      </Nav.Link>

      <Nav.Link as={Link} to="/about" >
        About
      </Nav.Link>
      <NavDropdown title="Settings" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={signOut} >
        Signout
        </NavDropdown.Item>
      </NavDropdown></>
  );
}