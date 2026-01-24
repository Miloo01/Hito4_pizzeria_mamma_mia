import React, { useContext } from 'react'
import { Navbar as RBNavbar, Container, Nav } from 'react-bootstrap'
import { formatNumber } from '../utils/format'
import { CartContext } from '../context/CartContext'
import { FaHome, FaShoppingCart, FaLock, FaUnlock, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import { UserContext } from '../context/UserContext'    



const Navbar = () => {
    const { getTotal, getCartCount } = useContext(CartContext)
    
    // se extrae el token y el método logout del contexto de usuario
    const { token, logout } = useContext(UserContext)




    const total = getTotal()
    const cartCount = getCartCount()
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
                                    <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                                    {/* Se llama a Logout al hacer click */}
                                    <Nav.Link onClick={logout} style={{cursor:'pointer'}}>🔒 Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Link as={Link} to="/login" className="text-black ms-3 text-decoration-none">
                                    <Nav.Link href="#login">🔐 Login</Nav.Link>
                                </Link>
                                <Link as={Link} to="/register" className="text-black ms-3 text-decoration-none">
                                    <Nav.Link href="#register">🔐 Register</Nav.Link>
                                </Link>
                            </>
                        )}
                    </Nav>

                    <Nav className="ms-auto">
                        <Link to="/cart" className="text-black ms-3 text-decoration-none">
                            <button type="button" className="btn btn-warning text-dark">
                                🛒 Total: ${totalFormatted} {cartCount > 0 && <span className="badge bg-danger ms-2">{cartCount}</span>}
                            </button>
                        </Link>
                    </Nav>
                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    )
}

export default Navbar