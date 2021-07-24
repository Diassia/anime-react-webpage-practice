import { Navbar, Container, Nav } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChessQueen } from '@fontawesome/fa-regular-fa-chess-queen';

const NavBar = () => {
    // const queenIcon = <FontAwesomeIcon icon="fa-regular fa-chess-queen" />

    return (
        <>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">NavBar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#new">Add New</Nav.Link>
                    <Nav.Link href="#completed">Completed</Nav.Link>
                    <Nav.Link href="#play">To Play</Nav.Link>
                </Nav>
            </Container>

        </Navbar>
        </>
    );
}
 
export default NavBar;