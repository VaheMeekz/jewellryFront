import React, {useEffect} from 'react';
import css from './about.module.css';
import {useDispatch, useSelector} from "react-redux";
import {aboutDown_get, aboutUp_get} from "../../Redux/Actions/about.action";
import {Col, Container, Row} from "react-bootstrap";
import Briliant from "../Briliant";
import BriliantBg from "../BriliantBg";
import {useTranslation} from "react-i18next";

const About = () => {

    const aboutUpDataMain = useSelector(state => state.aboutReducer.aboutUpData);
    const aboutDownDataMain = useSelector(state => state.aboutReducer.aboutDownData);

    const dispatch = useDispatch();
    const {t} = useTranslation()
    useEffect(() => {
        dispatch(aboutUp_get());
        dispatch(aboutDown_get());
        console.clear()
    }, []);

    return (
        <div>
            <Container>
                <Briliant/>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.aboutTitle}>
                            <h1>{t("about")}</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        {
                            aboutUpDataMain?.map((item) => {
                                return (
                                    <div className={css.divImages} key={item.id}>
                                        <img src={item.imgOne} alt="" className={css.imageOne}/>
                                        <img src={item.imgTwo} className={css.imageTwoo} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        {
                            aboutUpDataMain?.map((item) => {
                                return (
                                    <div className={css.divText} key={item.id}>
                                        <p>{ localStorage.getItem("lang") == "am" && item.textHy}</p>
                                        <p>{ localStorage.getItem("lang") == "ru" && item.textRu}</p>
                                        <p>{ localStorage.getItem("lang") == "en" && item.textEn}</p>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        {
                            aboutDownDataMain?.map((item) => {
                                return (
                                    <div className={css.divTextDown} key={item.id}>
                                        <p>{ localStorage.getItem("lang") == "am" && item.textHy}</p>
                                        <p>{ localStorage.getItem("lang") == "ru" && item.textRu}</p>
                                        <p>{ localStorage.getItem("lang") == "en" && item.textEn}</p>
                                    </div>
                                )
                            })
                        }
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div className={css.divDownMain}>
                            {
                                aboutDownDataMain?.map((item) => {
                                    return (
                                        <div className={css.divDownImageOne} key={item.id}>
                                            <img src={item.imgOne} alt=""/>
                                        </div>
                                    )
                                })
                            }
                            {
                                aboutDownDataMain?.map((item) => {
                                    return (
                                        <div className={css.divDownImage} key={item.id}>
                                            <img src={item.imgTwo} className={css.imgOneUp} alt=""/>
                                            <img src={item.imgThree} className={css.imgOneDown} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <BriliantBg/>
        </div>
    );
};

export default About;