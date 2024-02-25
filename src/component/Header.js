import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logoApp from '../assets/image/logo192.png'
import { useLocation, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



const Header = (props) => {
    const navigate = useNavigate();
    const HandleLogout = () => {
        localStorage.removeItem("token")
        navigate("/");
        toast.success('log out succeed !')

    }

    const location = useLocation();
    return (<>
        <Navbar bg="light" expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand href="#/">

                    <img
                        src={logoApp}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <span>Reverie's App</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <NavLink className="nav-link" to="/" >Home</NavLink>
                        <NavLink className="nav-link" to="/users">Manage Users</NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Setting" >
                            <NavLink className="dropdown-item" to="/login" >Login</NavLink>
                            <NavDropdown.Item onClick={() => HandleLogout()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}

export default Header;