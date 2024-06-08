
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MovieContext } from '../context/MovieContext';
import { useNavigate } from 'react-router-dom';
import '../header/navbar.css';

function NavScrollExample() {
  const [searchInput, setSearchInput] = useState('');
  const { changeMovieListType } = useContext(MovieContext);
  const history = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      changeMovieListType('search', searchInput.trim());
      history('/search');
    }
  };

  const handleNavClick = (type) => {
    changeMovieListType(type);
    history(`/movies/${type}`);
  };

  return (
    <Navbar expand="lg" className="navbar-custom sticky-top">
      <Container fluid style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        <Navbar.Brand href="/">MovieDb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => handleNavClick('popular')}>Popular</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('top_rated')}>Top Rated</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('upcoming')}>Upcoming</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className='nav-buttonn'>Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
