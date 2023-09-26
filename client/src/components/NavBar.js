import React, {useContext} from "react";
import { Context } from "../index";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
              <NavLink style={{color: "white"}} to={SHOP_ROUTE}>aptrsn shop</NavLink>
              {user.isAuth ?
                  <Nav className='ms-auto' style={{color: 'white'}}>
                    <Button variant="outline-light">Админ панель</Button>
                    <Button variant="outline-light" className="ms-2">Войти</Button>
                  </Nav>
                  :
                  <Nav className='ms-auto' style={{color: 'white'}}>
                    <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                  </Nav>
              }
          </Container>
          
      </Navbar>
    );
});

export default NavBar;