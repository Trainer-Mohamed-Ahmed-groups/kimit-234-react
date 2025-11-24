import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
export default function SiteNav() {
    const { i18n } = useTranslation()
    const theme = useContext(ThemeContext)
    console.log(theme)
    const handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
        localStorage.setItem('lang', i18n.language === 'en' ? 'ar' : 'en')
    }
    return (
        <Navbar expand="lg" className={theme.theme === 'light' ? 'bg-body-tertiary' : 'bg-dark'}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <FaMoon className='me-3 cursor-pointer' onClick={theme.handleTheme} />
                <FaLanguage className='cursor-pointer' onClick={handleLanguage} />
            </Container>
        </Navbar>
    )
}
