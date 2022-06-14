import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import css from './newProduct.module.css';
import NewProductImage from '../../../Images/newProductImage.png';
import {IoIosArrowForward} from 'react-icons/io';
import {product_category_get, product_get} from "../../../Redux/Actions/product.action";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {productReducer} from "../../../Redux/Reducers/productReducer";

const NewProduct = () => {

    const categories = useSelector(state => state.productReducer.categories)
    const dispatch = useDispatch()
    const {t} = useTranslation()
    useEffect(() => {
        dispatch(product_get())
        dispatch(product_category_get())
        console.clear()
    }, []);
    return (
        <Row className="justify-content-md-center">
            {
                categories && categories?.map((item) => {
                    return (
                        <Col lg={3} md={6} xs={12} key={item.id}>
                            <div className={css.main}>
                                <div className={css.divMain}>
                                    <div>
                                        <h3>{localStorage.getItem("lang") == "am" && item.nameHy}</h3>
                                        <h3>{localStorage.getItem("lang") == "ru" && item.nameRu}</h3>
                                        <h3>{localStorage.getItem("lang") == "en" && item.nameEn}</h3>
                                    </div>
                                    <div>
                                        <img src={NewProductImage} alt=""/>
                                    </div>
                                    <img src={item.image} alt=""/>
                                    <Link to={'/products/' + item.id}>
                                        <div className={css.SeeDiv}>
                                            <h5>{t("collection")}</h5>
                                            <i><IoIosArrowForward/></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default NewProduct;