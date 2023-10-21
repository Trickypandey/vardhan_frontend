import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-2">
        <NavbarBrand tag={ReactLink} to="/">Vardhan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
            <NavLink tag={ReactLink} to="/addcustomer">Add Customer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                about
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Profile</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;