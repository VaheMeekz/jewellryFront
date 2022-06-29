import React from 'react';
import {Col, Row} from "react-bootstrap";
import Item from "./Item";
import css from "../Products/products.module.css";
import {useState,useEffect} from "react";
import {makeArray} from "../../Config/keys";
import {useDispatch} from "react-redux";
import {portfolioGetImagesAC} from "../../Redux/Actions/rend.action";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

const Images = ({data, count}) => {
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
        dispatch(portfolioGetImagesAC(page, limit))
        console.clear()
    },[page])
    return (
        <Row>
            <Col>
                <Row className={css.zIndex}>
                    {
                        data?.map(i => {
                            return <Item item={i} key={i.id} className={css.zIndex}/>
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

export default Images;