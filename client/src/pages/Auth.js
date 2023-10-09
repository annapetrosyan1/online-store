import React, { useState } from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async () => {
        if (isLogin) {
            const response = await login();
        } else {
            const response = await registration(email, password);
            console.log(response)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 500}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-4"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-2 px-3">
                        {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>
                        }
                        <Button
                            className="mt-3"
                            variant='secondary'
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;