import React, {useEffect, useState} from 'react';
import Briliant from "../Briliant";
import {Col, Container, Row} from "react-bootstrap";
import css from './products.module.css';
import {useDispatch, useSelector} from "react-redux";
import {product_category_get, product_get, productTextAC} from "../../Redux/Actions/product.action";
import ProductItem from "../ProductItem";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md';
import {makeArray} from "../../Config/keys";
import {useTranslation} from "react-i18next";

const Products = () => {
    const limit = 8;
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const [idMain, setIdMain] = useState();
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState([]);
    const productData = useSelector(state => state.productReducer.products);
    const categoriesDataMain = useSelector(state => state.productReducer.categories);
    const text = useSelector(state => state.productReducer.text);
    const count = useSelector(state => state.productReducer.count);

    useEffect(() => {
        if (count) {
            setPages(makeArray(Math.ceil(count / limit)));
        }
        console.clear()
    }, [count, limit]);

    useEffect(() => {
        dispatch(product_get(page, limit));
        dispatch(product_category_get());
        dispatch(productTextAC())
    }, [page]);
    const filterData = (id) => {
        dispatch(product_get(id));
        setIdMain(id);
    };

    return (
        <div>
            <Briliant/>
            <Container>
                <Row className={css.zIndex}>

                    <Col lg={12} md={12} xs={12}>
                        <div className={css.productTitle}>
                            <h1>{t("products")}</h1>
                            <p>{localStorage.getItem("lang") == "am" && text?.textHy}</p>
                            <p>{localStorage.getItem("lang") == "ru" && text?.textRu}</p>
                            <p>{localStorage.getItem("lang") == "en" && text?.textEn}</p>
                        </div>
                    </Col>
                </Row>
                <Row className={css.zIndex} className="justify-content-md-center">
                    {
                        categoriesDataMain?.map((item) => {
                            return (
                                <Col lg={2} xs={12} md={6} key={item.id}>
                                    <div className={idMain == item.id ? css.active : css.filterDiv}
                                         onClick={() => filterData(item.id)}>
                                        <h2>{localStorage.getItem("lang") == "am" &&item.nameHy}</h2>
                                        <h2>{localStorage.getItem("lang") == "ru" &&item.nameRu}</h2>
                                        <h2>{localStorage.getItem("lang") == "en" &&item.nameEn}</h2>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className={css.border}/>
                <Row className={css.zIndex}>
                    {
                        productData?.map((item) => {
                            return <ProductItem item={item} key={item.id}/>
                        })
                    }
                </Row>
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
            </Container>
        </div>
    );
};

export default Products;