import React, { useState } from 'react';
import { NavLink as ReactLink, useLocation } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

function CustomNavbar(args) {
  const location = useLocation(); // Use the useLocation hook from react-router-dom
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const isCustomerRoute = /^\/customer(\/.*)?$/.test(location.pathname);
  const isUserRoute = /^\/user(\/.*)?$/.test(location.pathname);
  
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-2">
        <NavbarBrand tag={ReactLink} to="/dashboard">Vardhan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {/* <NavItem>
              <NavLink tag={ReactLink} to="/customer">Customer</NavLink>
            </NavItem> */}
            {/* {isCustomerRoute && (
              <NavItem>
                <NavLink tag={ReactLink} to="/customer/addcustomer">Add New Customer</NavLink>
              </NavItem>
            )} */}
            {/* <NavItem>
              <NavLink tag={ReactLink} to="/user">User</NavLink>
            </NavItem> */}
            {/* {isUserRoute && (
              <NavItem>
                <NavLink tag={ReactLink} to="/user/adduser">Add New User</NavLink>
              </NavItem>
            )} */}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Customer
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/customer">dashboard</DropdownItem>
                <DropdownItem tag={ReactLink} to="/customer/addcustomer">Add New Customer</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/user">User</DropdownItem>
                <DropdownItem tag={ReactLink} to="/user/adduser">Add New Customer</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Profile</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
