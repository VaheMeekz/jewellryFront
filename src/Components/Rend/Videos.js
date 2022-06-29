import React from 'react';
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {makeArray} from "../../Config/keys";
import {portfolioGetImagesAC, portfolioGetVideosAC} from "../../Redux/Actions/rend.action";
import {Col, Row} from "react-bootstrap";
import css from "../Products/products.module.css";
import Item from "./Item";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import VideoItem from "./videoItem";

const Videos = ({data,count}) => {
    const limit = 8;
    const dispatch = useDispatch()
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState([]);
    useEffect(() => {
        if (count) {
            setPages(makeArray(Math.ceil(count / limit)));
        }
        // console.clear()
    }, [count, limit]);
    useEffect(()=>{
        dispatch(portfolioGetVideosAC(page, limit))
        console.clear()
    },[page])
    return (
        <Row>
            <Col>
                <Row className={css.zIndex}>
                    {
                        data?.map(i => {
                            return <VideoItem item={i} key={i.id} className={css.zIndex}/>
                        })
                    }
                </Row>
            </Col>
            <Row className={css.zIndex}>
                <Col>
                    {
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
                    }
                </Col>
            </Row>
        </Row>
    );
};

export default Videos;