import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from "react-icons/fa";

import { NavLink } from 'react-router-dom';
export default function SiteNav() {
    const { i18n } = useTranslation()

    const handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
        localStorage.setItem('lang', i18n.language === 'en' ? 'ar' : 'en')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <FaLanguage className='cursor-pointer' onClick={handleLanguage} />
            </Container>
        </Navbar>
    )
}
