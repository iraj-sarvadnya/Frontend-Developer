import logo from '../img/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Sidebar from '../Component/Toggle';
function Navigation() {
    return (
        <div className='top-navigation py-3'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} alt='FALCON 9' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">FALCON 9</Nav.Link>
                            <Nav.Link href="#">FALCON HEAVY</Nav.Link>
                            <Nav.Link href="#">DRAGON</Nav.Link>
                            <Nav.Link href="#">STARSHIP</Nav.Link>
                            <Nav.Link href="#">HUMAN SPACEFLIGHT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
            </div>
        </div>
    )
}
export default Navigation;