import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Navbar variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <img width={90} src='image/heeflix-logo.png' />
          </Navbar.Brand>
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to='/' className='nav-link'>
                Home
              </Link>
              <Link to='/movies' className='nav-link'>
                Movies
              </Link>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-danger'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
