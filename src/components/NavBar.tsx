import React from "react";
import { Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">
          Currency Exchange
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
