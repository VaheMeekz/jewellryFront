import React, {useEffect} from 'react';
import Briliant from "../Briliant";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import css from "../Products/products.module.css";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {portfolioGetImagesAC, portfolioGetVideosAC} from "../../Redux/Actions/rend.action";
import Images from "./Images";
import Videos from "./Videos";

const Rend = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const images = useSelector(state => state.rendReducer.images)
    const imagesCount = useSelector(state => state.rendReducer.imagesCount)
    const videos = useSelector(state => state.rendReducer.videos)
    const videosCount = useSelector(state => state.rendReducer.videosCount)

    useEffect(()=>{
        dispatch(portfolioGetImagesAC())
        dispatch(portfolioGetVideosAC())
        console.clear()
    },[])


    return (
        <div>
            <Briliant/>
            <Container>
                <Row className={css.zIndex}>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.productTitle}>
                            <h1>{t("rend")}</h1>
                        </div>
                    </Col>
                </Row>
                <Row className={css.zIndex}>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title={t("image")}>
                            <Images data={images} count={imagesCount}/>
                        </Tab>
                        <Tab eventKey="profile" title={t("video")}>
                            <Videos  data={videos} count={videosCount}/>
                        </Tab>

                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};

export default Rend;