import React, {useContext} from "react";
import { Context } from "../index";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <NavLink style={{color: "white"}} to={SHOP_ROUTE}>aptrsn shop</NavLink>
          <Nav className="me-auto">
            <Nav.Link href="#brands">Brands</Nav.Link>
            <Nav.Link href="#devices">Devices</Nav.Link>
            <Nav.Link href="#types">Types</Nav.Link>
          </Nav>
      </Navbar>
    );
};

export default NavBar;