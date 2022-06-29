import React from 'react';
import css from "../ProductItem/productItem.module.css";
import {Col} from "react-bootstrap";
import styles from "./rend.module.css"
import {useTranslation} from "react-i18next";
const Item = ({item}) => {
    const {t} = useTranslation()
    return (
        <Col Col lg={3} md={6} xs={12} className={`${css.zIndex} mt-4`}>
            <div className={`${css.itemDiv} ${styles.meekz}`}>
                <div>
                    <img src={item?.image} alt="image"/>
                </div>
                <div>
                    {t("image")}
                </div>
            </div>
        </Col>
    );
};

export default Item;