import React, {useEffect} from 'react';
import css from './footer.module.css';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {contact_get} from "../../Redux/Actions/home.action";
import {useTranslation} from "react-i18next";


const Footer = () => {
    const dataContact = useSelector(state => state.homeReducer.contactData);
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const year = new Date().getFullYear()

    useEffect(() => {
        dispatch(contact_get())
    },[]);

    return (
        <div>
        <div className={css.footerMain}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={4} md={6} xs={12}>
                        <div className={css.footOne}>
                            <div>
                                <h4>{t("contacts")}</h4>
                                <div>
                                    <div>
                                        <span>{t("address")}: <p>{dataContact[0]?.location}</p></span>
                                        <span>{t("phone")}: <p>{dataContact[0]?.phone}</p></span>
                                        <span>{t("email")}: <p>{dataContact[0]?.email}</p></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={6} xs={12}>
                        <div className={css.footOne}>
                            <div className={css.divMainFooter}>
                                <h4>{t("information")}</h4>
                                <div>
                                    <div>
                                        <Link to={'/about'}>{t("about")}</Link>
                                        <Link to={'/contact'}>{t("contacts")}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={6} xs={12}>
                        <div className={css.footOne}>
                            <div className={css.divMainFooter}>
                                <h4>{t("products")}</h4>
                                <div>
                                    <div>
                                        <Link to={'/products'}>{t("products")}</Link>
                                        <Link to={'/portfolio'}>{t("portfolio")}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/*<Col lg={2} md={6} xs={12}>*/}
                    {/*    <div className={css.footOne}>*/}
                    {/*        <div className={css.divMainFooter}>*/}
                    {/*            <h4>Lorem</h4>*/}
                    {/*            <div>*/}
                    {/*                <div>*/}
                    {/*                    <Link to={'/about'}>About us</Link>*/}
                    {/*                    <Link to={'/contact'}>Contact us</Link>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                    <Col lg={2} md={12} xs={12}>
                        <div className={css.footOne}>
                            <div className={css.divMainFooter}>
                                <h1>Jewelery</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
            <Container className={css.armCodingBox}>ARMCODING {year}</Container>
        </div>
);
};

export default Footer;