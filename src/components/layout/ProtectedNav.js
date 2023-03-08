import { Nav, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setAuthPayload } from "../../store/reducers/authSlice";


export default function ProtectedNav({checkUserToken}) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const signOut = () => {
    console.log('protected routed hit')
    localStorage.clear();
    dispatch( setAuthPayload(false))
    // setTimeout(()=> {
    //   navigate('/login')
    // },500)
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