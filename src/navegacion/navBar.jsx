import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="body-tertiary" expand="lg">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Item>
            <Nav.Link href="#" active>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Link</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form className="d-flex" role="search">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
