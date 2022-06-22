import React from 'react';
import css from './productItem.module.css';
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ProductItem = ({item}) => {
    const {t} = useTranslation()
    return (
        <Col lg={3} md={6} xs={12} className='mt-4'>
            <div className={css.itemDiv}>
                <div>
                    <img src={item.ProductImages[0]?.image} alt="image"/>
                    <p>{localStorage.getItem("lang") == "am" && item.Category?.nameHy}</p>
                    <p>{localStorage.getItem("lang") == "ru" && item.Category?.nameRu}</p>
                    <p>{localStorage.getItem("lang") == "en" && item.Category?.nameEn}</p>
                    <h3>{localStorage.getItem("lang") == "am" && item.nameHy}</h3>
                    <h3>{localStorage.getItem("lang") == "ru" && item.nameRu}</h3>
                    <h3>{localStorage.getItem("lang") == "en" && item.nameEn}</h3>
                    <button>
                        <Link to={"/products/" + item.id}>
                            {t("viewDetail")}
                        </Link>
                        </button>
                </div>
            </div>
        </Col>
    );
};

export default ProductItem;