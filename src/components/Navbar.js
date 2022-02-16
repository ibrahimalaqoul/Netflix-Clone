import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';

export default function NavbAr() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favList">Fav List</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

