import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';

function Header() {
  const location = useLocation();
  // if (location.pathname.includes('admin')) {
  //   return null;
  // }
  // else{
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="mt-lg-2 mt-3 fw-bold  " style={{ color: '#087ea4' }}>
            Good Reads
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={location.pathname.includes('admin')? '/admin': '/home'}>Home</Nav.Link>
            <Nav.Link href={location.pathname.includes('admin')? '/admin/categories': '/categories'}>Categories</Nav.Link>
            <Nav.Link href={location.pathname.includes('admin')? '/admin/books': '/books'}>Books</Nav.Link>
            <Nav.Link href={location.pathname.includes('admin')? '/admin/authors': '/authors'}>Authors</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // }
}

export default Header;
