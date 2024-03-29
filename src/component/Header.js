import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logoApp from '../assets/image/logo192.png'
import { useLocation, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';



const Header = (props) => {

    const { logout, user } = useContext(UserContext);



    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
        toast.success('log out succeed !')

    }

    const location = useLocation();
    return (<>
        <Navbar bg="light" expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand >

                    <img
                        src={logoApp}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <span role="button" onClick={() => navigate("/")}>Reverie's App</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {(user && user.auth || window.location.pathname === '/') &&
                        <>
                            <Nav className="me-auto" >
                                <NavLink className="nav-link" to="/" >Home</NavLink>
                                <NavLink className="nav-link" to="/users">Manage Users</NavLink>
                            </Nav>
                            <Nav>
                                {user && user.email && <span className='nav-link'> Welcome {user.email} </span>}
                                <NavDropdown title="Setting" >
                                    {user && user.auth === true
                                        ? <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
                                        : <NavLink className="dropdown-item" to="/login" >Login</NavLink>}
                                </NavDropdown>
                            </Nav>
                        </>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}

export default Header;