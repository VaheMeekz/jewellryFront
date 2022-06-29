import React from 'react';
import css from "../ProductItem/productItem.module.css";
import {Col} from "react-bootstrap";
import styles from "./rend.module.css"
import ReactPlayer from "react-player";
import {useTranslation} from "react-i18next";
const VideoItem = ({item}) => {
    const {t} = useTranslation()
    return (
        <Col Col lg={3} md={6} xs={12} className={`${css.zIndex} mt-4`}>
            <div className={`${css.itemDiv} ${styles.meekz}`}>
                <div>
                    <ReactPlayer url={item?.image}
                                 style={{display: "flex", justifyContent: "center",zIndex:"100"}} height={'315px'}
                                 width={'100%'}/>
                </div>
                <div>
                    {t('video')}
                </div>
            </div>
        </Col>
    );
};

export default VideoItem;