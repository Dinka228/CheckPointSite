import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from "../index.js";
import {LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE} from "../utils/consts.js";


const NavBar = observer(() => {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    const [showNavCentred, setShowNavCentred] = useState(false);
    const history = useHistory()
    const {user} = useContext(Context)
    const {points} = useContext(Context)
    return (
        <Navbar bg="secondary" expand="lg">
            {
                user.isAuth ? <Container>
                    <Navbar.Brand  style={{cursor:"pointer", color:"white"}} onClick={()=>history.push(PROFILE_ROUTE)}>CheckPoints</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" >
                            <Nav.Link style={{color:"white"}} onClick={()=>{
                                user.setIsAuth(false)
                                user.setCurrentUser({})
                                history.push(LOGIN_ROUTE)
                            }
                            }>{!user.isAuth ? `Sign in` : `Exit`}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container> : <div></div>
            }

        </Navbar>
    );
});

export default NavBar;