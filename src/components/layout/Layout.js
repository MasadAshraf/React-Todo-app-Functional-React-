import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ProtectedNav from "./ProtectedNav";
import PublicNav from "./PublicNav";

export default function Layout({isAuth}) {
console.log(isAuth)


  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Todo App</Navbar.Brand>
     
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              {isAuth ? <ProtectedNav/> : <PublicNav/> }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}