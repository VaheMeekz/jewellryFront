import React, {useState} from 'react';
import css from './header.module.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useLocation, useParams} from "react-router-dom";
import Languages from "./Languages";
import {useTranslation} from "react-i18next";
import logo from "../../Images/logo.png"
const Header = () => {

    const [closeNav, setCloseNav] = useState(false)
    const {t} = useTranslation()
    const {pathname} = useLocation();
    const {id} = useParams();

    const clickToUp = () => {
        setCloseNav(false)
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
        console.clear()
    }

    return (<div className={css.mainDiv}>
            <Navbar collapseOnSelect expand="lg" variant="dark" expanded={closeNav}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" style={{
                            width:"50px"
                        }}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {
                        setCloseNav(closeNav ? false : "closeNav")
                    }}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link onClick={clickToUp}
                                  className={`${pathname == "/" ? css.linkMian : null}`}
                                  to="/"> {t('home')}</Link>
                            <Link onClick={clickToUp}
                                  className={`${pathname == "/about" ? css.linkMian : null}`}
                                  to="/about">{t('about')}</Link>
                            <Link onClick={clickToUp}
                                  className={`${pathname == "/products" || pathname == `/product/${id}` ? css.linkMian : null}`}
                                  to="/products">{t("products")}</Link>
                            <Link onClick={clickToUp}
                                  className={`${pathname == "/portfolio" ? css.linkMian : null}`}
                                  to="/portfolio">{t("portfolio")}</Link>
                            <Link onClick={clickToUp}
                                  className={`${pathname == "/contact" ? css.linkMian : null}`}
                                  to="/contact">{t("contacts")}</Link>
                            <span className={css.borderMain}/>
                            <Languages/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>);
};

export default Header;