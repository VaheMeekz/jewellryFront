import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './portfolio.module.css';
import {useDispatch, useSelector} from "react-redux";
import {portfolio_banner_get, portfolio_get} from "../../Redux/Actions/portfolio.action";
import {makeArray} from "../../Config/keys";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md';
import ReactPlayer from "react-player"
const Portfolio = () => {
    const limit = 7;
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState([]);
    const mainData = useSelector(state => state.portfolioReducer.data);
    const count = useSelector(state => state.portfolioReducer.count);
    const videoImg = useSelector(state => state.portfolioReducer.videoImg);

    useEffect(() => {
        if (count) {
            setPages(makeArray(Math.ceil(count / limit)));
        }
    }, [count, limit]);

    useEffect(() => {
        dispatch(portfolio_get(page, limit));
        dispatch(portfolio_banner_get());
        console.clear()
    },[page])

    return (
        <div className={css.main}>
            <Container>
                <Row className="justify-content-md-center">
                    {
                        mainData?.slice(0, 3).map((item) => {
                            return (
                                <Col lg={4} md={6} xs={12} key={item.id}>
                                    <div className={css.videoDiv}>
                                        <ReactPlayer url={item.video}/>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={12} xs={12} md={12}>
                        <div className={css.videoImgDiv}>
                            <img src={videoImg[0]?.image} alt=""/>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    {
                        mainData?.slice(3).map((item) => {
                            return (
                                <Col lg={6} md={6} xs={12} key={item.id}>
                                    <div className={css.videoDiv2}>
                                        <ReactPlayer url={item.video}/>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Col>
                        {
                            mainData?.length < 5 ? null : (
                                <div className="pagBox">
                                    <div>
                                        {pages.length - 1 == page ? (
                                            <button onClick={() => {
                                                setPage(page - 1);
                                            }} type="reset" className='btnArrow'><MdOutlineKeyboardArrowLeft/>
                                            </button>
                                        ) : null}
                                    </div>
                                    {pages.length > 1 &&
                                        pages.map((s) => {
                                            return (
                                                <div
                                                    className={page === s ? "ActivePagItem" : "pagItem"}
                                                    key={s}
                                                    onClick={() => {
                                                        setPage(s);
                                                    }}
                                                >
                                                <span>
                                                    {s + 1}
                                                </span>
                                                </div>
                                            );
                                        })}
                                    <div>
                                        {pages.length - 1 == page ? null : (
                                            <button onClick={() => {
                                                setPage(page + 1);
                                            }} type="reset" className='btnArrow'><MdOutlineKeyboardArrowRight/>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )

                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;