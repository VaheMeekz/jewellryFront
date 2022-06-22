import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Col, Row} from "react-bootstrap";
import css from './newProduct.module.css';
import NewProductImage from '../../../Images/newProductImage.png';
import {IoIosArrowForward} from 'react-icons/io';
import { product_get} from "../../../Redux/Actions/product.action";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom"
const NewProduct = ({data}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()
    useEffect(() => {
        dispatch(product_get())
        console.clear()
    }, []);
    return (
        <Row className={`${css.zIndex} justify-content-md-center`}>
            {
                data && data?.map((item) => {
                    return (
                        <Col lg={3} md={6} xs={12} key={item.id} onClick={()=>navigate(`/products/${item.id}`)} style={{
                            cursor:"pointer"
                        }}>
                            <div className={css.main} >
                                <div className={css.divMain}>
                                    <div>
                                        <h3>{localStorage.getItem("lang") == "am" && item.nameHy}</h3>
                                        <h3>{localStorage.getItem("lang") == "ru" && item.nameRu}</h3>
                                        <h3>{localStorage.getItem("lang") == "en" && item.nameEn}</h3>
                                    </div>
                                    <div>
                                        <img src={NewProductImage} alt=""/>
                                    </div>
                                    <img src={item.ProductImages[0]?.image} alt="image"/>
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