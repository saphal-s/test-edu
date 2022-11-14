import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
    const [backgrounds, setBackgrounds] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setBackgrounds(true);
        }
        else {
            setBackgrounds(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark"
            className={backgrounds ? 'navbar' : 'navbars'}>
            <Container>
                <Navbar.Brand>E-LEARNING</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <li className="nav_link"><Link to="/" className='link'>Home</Link> </li>
                        <li className="nav_link"><Link to="/about" className='link'>About Us</Link></li>
                        <li className="nav_link"><Link to="/contact" className='link'>Contact Us</Link></li>
                    </Nav>
                    <Nav>
                        <li className="icons"><FaFacebookF /></li>
                        <li className="icons"><AiFillInstagram /></li>
                        <li className="icons"><FaLinkedinIn /></li>
                        <li className="icons"><FaTwitter /></li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header