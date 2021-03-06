import React, {useEffect, useState} from 'react';
import css from './detail.module.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailAction} from "../../Redux/Actions/product.action";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import FbSvg from '../../Images/facebookSvg.svg';
import {Formik} from "formik";
import BriliantBg from "../BriliantBg";
import axios from "axios";
import {backUrl} from "../../Config/keys";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import ReactPlayer from "react-player"
import {FacebookShareButton} from "react-share";

const Detail = () => {
    const {t} = useTranslation()
    let {id} = useParams();
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = React.useState(false);
    const [openImage,setOpenImage] = useState(false)
    const [modalImage,setModalImage] = useState(null)
    const productDataDetail = useSelector(state => state.productReducer.detail);
    useEffect(() => {
        if (id) dispatch(detailAction(id))
        console.clear()
    }, [id]);
    let mainImag = productDataDetail?.ProductImages?.slice(0, 1).map((item) => {
        return item.image
    })[0]

    const [images, setImages] = useState(mainImag)

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={css.divModal}>
                        <i><BsFillCheckCircleFill/></i>
                        <h2>{t("success")}</h2>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>{t("close")}</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div>
            <Container>
                <Row className={`${css.zIndex} justify-content-md-center`}>
                    <Col className={css.zIndex} lg={5} md={12} xs={12}>
                        <div className={css.divImageMain}>
                            {
                                images == undefined ?
                                    <img src={mainImag} alt="image" onClick={()=> {
                                        setModalImage(mainImag);
                                        setOpenImage(true)
                                    }}/> :
                                    <img src={images} alt="image" onClick={()=> {
                                        setModalImage(mainImag);
                                        setOpenImage(true)
                                    }}/>
                            }
                            <div className={css.divImages}>
                                {
                                    productDataDetail?.ProductImages?.map((item) => {
                                        return (
                                            <img key={item.id} src={item.image} alt="image"
                                                 onClick={() => {
                                                     setImages(item.image);
                                                     setModalImage(item.image);
                                                     setOpenImage(true)
                                                 }}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div className={css.detailDescription}>
                            <div>
                                <h1>{localStorage.getItem("lang") == "am" && productDataDetail.nameHy}</h1>
                                <h1>{localStorage.getItem("lang") == "ru" && productDataDetail.nameRu}</h1>
                                <h1>{localStorage.getItem("lang") == "en" && productDataDetail.nameEn}</h1>
                                <p>{localStorage.getItem("lang") == "am" && productDataDetail.descriptionHy}</p>
                                <p>{localStorage.getItem("lang") == "ru" && productDataDetail.descriptionRu}</p>
                                <p>{localStorage.getItem("lang") == "en" && productDataDetail.descriptionEn}</p>
                                <div>
                                    <span>Share:</span>
                                    <FacebookShareButton
                                        url={"https://peing.net/ja/"}
                                        quote={"???????????????????????????????????????????????????????????????"}
                                        hashtag={"#hashtag"}
                                        description={"aiueo"}
                                        className="Demo__some-network__share-button"
                                    >
                                        <img src={FbSvg} alt="image"/>
                                    </FacebookShareButton>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} xs={12} md={12}>
                        <div className={css.divVideo}>
                            <div className={css.video_slice}
                                 style={{display: "flex", justifyContent: "center", width: "100%"}}>
                                <ReactPlayer url={productDataDetail.video}
                                             style={{display: "flex", justifyContent: "center",zIndex:"100"}} height={'315px'}
                                             width={'100%'}/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} xs={12} md={12}>
                        <div>
                            <Formik
                                initialValues={{name: '', phone: ''}}
                                validate={values => {
                                    const errors = {};
                                    if (!values.name) {
                                        errors.name = 'Required';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        axios.post(`${backUrl}/api/v1/order`, {
                                            name: values.name,
                                            text: values.textOne,
                                            phone: values.phone,
                                            productId: id
                                        })
                                            .then(function (response) {
                                                if (response.status == 200) {
                                                    setModalShow(true)
                                                    values.name = ''
                                                    values.phone = ''
                                                    values.textOne = ''
                                                }
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                            });
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                      values,
                                      errors,
                                      touched,
                                      handleChange,
                                      handleBlur,
                                      handleSubmit,
                                      isSubmitting,
                                  }) => (
                                    <form onSubmit={handleSubmit}>
                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                        <div className={css.formMain}>
                                            <h1>{t("yourMessage")}</h1>
                                            <div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.name}
                                                        placeholder={t("name")}
                                                    />
                                                    <span className={css.error}>
                                                        {errors.name && touched.name && errors.name}
                                                        </span>
                                                </div>
                                                <div>
                                                    <input
                                                        type="number"
                                                        name="phone"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phone}
                                                        placeholder={t("phone")}
                                                    />
                                                    <span className={css.error}>
                                                        {errors.phone && touched.phone && errors.phone}
                                                        </span>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                name="textOne"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.textOne}
                                                placeholder={t("message")}
                                                className={`${css.inpRew} ${css.zIndex}`}
                                            />
                                            {errors.textOne && touched.textOne && errors.textOne}
                                            <div className={css.btnDiv}>
                                                <button type="submit" disabled={isSubmitting}>
                                                    {t("send")}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ImageModal
                show={openImage}
                onHide={() => setOpenImage(false)}
                image={images}
            />
            <BriliantBg/>
        </div>
    );
};

const ImageModal = (props) => {
    return(
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <img src={props.image} alt="image" width={270} height={300}/>
            </Modal.Body>
        </Modal>
    )
}

export default Detail;