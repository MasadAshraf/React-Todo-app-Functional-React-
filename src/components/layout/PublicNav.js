import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PublicNav() {

    return (
        <>
            <Nav.Link as={Link} to='/login' >
                Login
            </Nav.Link>
        </>
    );
}