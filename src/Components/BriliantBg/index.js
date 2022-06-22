import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from "../Home/home.module.css";
import {useDispatch, useSelector} from "react-redux";
import {home_footer_get} from "../../Redux/Actions/home.action";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const BriliantBg = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const homeFooterData = useSelector(state => state.homeReducer.homeFooter);
    useEffect(() => {
        dispatch(home_footer_get());
        console.clear()
    },[]);

    return (
        <div>
            <div style={{
                width: "100%",
                backgroundImage: `url(${homeFooterData[0]?.image})`,
                objectFit: "cover",
                margin: "5rem 0",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
                <Container>
                    <Row>
                        <Col lg={12} xs={12} md={12}>
                            <div className={css.mainDivBg}>
                                <h2>{localStorage.getItem("lang") == "am" && homeFooterData[0]?.titleHy}</h2>
                                <h2>{localStorage.getItem("lang") == "ru" && homeFooterData[0]?.titleRu}</h2>
                                <h2>{localStorage.getItem("lang") == "en" && homeFooterData[0]?.titleEn}</h2>
                                <p>{localStorage.getItem("lang") == "am" && homeFooterData[0]?.textHy}</p>
                                <p>{localStorage.getItem("lang") == "ru" && homeFooterData[0]?.textRu}</p>
                                <p>{localStorage.getItem("lang") == "en" && homeFooterData[0]?.textEn}</p>
                                <button>
                                    <Link to={'/about'}>
                                        {t("seeMore")}
                                    </Link>
                                    </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BriliantBg;