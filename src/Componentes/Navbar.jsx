import React from 'react'
import { Navbar as RBNavbar, Container, Nav } from 'react-bootstrap'
import { formatNumber } from '../utils/format'
import { FaHome, FaShoppingCart, FaLock, FaUnlock, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'



const Navbar = () => {
    // Simulaciones de estado
    const token = false // true = usuario logueado
    const total = 25000

    const totalFormatted = formatNumber(total)

    return (
        <RBNavbar bg="dark" variant="dark" expand="lg">
            <Container>
                <RBNavbar.Brand href="#home">Pizzería Mamma Mía</RBNavbar.Brand>
                <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
                <RBNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       
                        <Link to="/" className="text-black ms-3 text-decoration-none">
                            <button type="button" className="btn btn-outline-light me-2" > 🍕 Home</button>
                        </Link>

                        <Link to="/profile" className="text-black ms-3 text-decoration-none">
                            <button type="button" className="btn btn-outline-light me-2">🍕 Profile</button>
                        </Link>

                    </Nav>

                    <Nav>
                        {token ? (
                            <>
                                <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                                <Nav.Link href="#logout">🔒 Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-black ms-3 text-decoration-none">
                                    <Nav.Link href="#login">🔐 Login</Nav.Link>
                                </Link>
                                <Link to="/register" className="text-black ms-3 text-decoration-none">
                                    <Nav.Link href="#register">🔐 Register</Nav.Link>
                                </Link>
                            </>
                        )}
                    </Nav>

                    <Nav className="ms-auto">
                        <Link to="/cart" className="text-black ms-3 text-decoration-none">
                            <button type="button" className="btn btn-warning text-dark">🛒 Total: ${totalFormatted}</button>
                        </Link>
                    </Nav>
                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    )
}

export default Navbar