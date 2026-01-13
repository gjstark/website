import React from 'react'
import { Link } from 'gatsby'
//import styles from './navigation.module.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default () => (
  <nav role="navigation">
    {/* <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul> */}
    <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src="/herdingcoders_logo.svg"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Herding Coders"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navBarResponsive" />
      <Navbar.Collapse id="navBarResponsive">
        <Nav as="ul" className="ml-auto">
          <Nav.Item as="li">
            <Link to="/" className="nav-link" activeClassName="active">
              Home
            </Link>
          </Nav.Item>
          {/* <Nav.Item as="li">
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
          </Nav.Item> */}

           <NavDropdown title="Services" id="nav-dropdown" >
            <NavDropdown.Item >
              <Link to="/services/engineering-team-services" >
              Engineering team services
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to="/services/business-analysis-services" >
                Business Analysis services
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to="/services/solution-design-services" >
                Solution Design services
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
               <Link to="/services/quality-services" >
                Quality services
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item >
               <Link to="/services/delivery-services" >
                Delivery services
              </Link>
            </NavDropdown.Item>

          </NavDropdown>

          <NavDropdown title="Software" id="nav-dropdown-software" >
            <NavDropdown.Item >
              <Link to="/pixelpomodoro" >
                Pixel Pomodoro
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item as="li">
            <Link to="/blog" className="nav-link" activeClassName="active">
              Blog
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/contact" className="nav-link" activeClassName="active">
              Contact
            </Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>


  </nav>
)
