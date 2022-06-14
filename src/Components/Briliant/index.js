import React from 'react';
import css from './briliant.module.css';
import {Col, Container, Row} from "react-bootstrap";
import Brialiant from "../../Images/briliant.png";
import {useTranslation} from "react-i18next";

const Briliant = () => {
    const {t} = useTranslation()
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} xs={12} md={12}>
                        <div className={css.briliant}>
                            <img src={Brialiant} alt=""/>
                            <h3>{t("delivery")}</h3>
                            <img src={Brialiant} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Briliant;