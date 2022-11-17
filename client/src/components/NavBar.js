import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

function NavBar() {
  return (
    <Navbar>
      <NavbarBrand href={"/"}>ReactCord</NavbarBrand>
      <Nav className={"me-auto"} navbar>
        <NavItem right>
          <NavLink href={"/login"}>Login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
