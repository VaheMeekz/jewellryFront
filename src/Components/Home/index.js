import React, {useEffect} from 'react';
import css from './home.module.css';
import {Button, Carousel, Col, Container, Modal, Row} from "react-bootstrap";
import Brialiant from '../../Images/briliant.png';
import HomeSlider from "./HomeSlider";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import NewProduct from "./NewProduct";
import Briliant from "../Briliant";
import BriliantBg from "../BriliantBg";
import {product_category_get, productSlider_get} from "../../Redux/Actions/product.action";
import {home_slider_get} from "../../Redux/Actions/home.action";
import {Formik} from "formik";
import axios from "axios";
import {backUrl} from "../../Config/keys";
import {Link} from "react-router-dom";
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {useTranslation} from "react-i18next";

const Home = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const sliderDataMain = useSelector(state => state.productReducer.productSlider, shallowEqual);
    const homeBannerDataMain = useSelector(state => state.homeReducer.homeBanner, shallowEqual);
    const categories = useSelector(state => state.productReducer.categories)
    const dispatch = useDispatch();
    const {t} = useTranslation()
    useEffect(() => {
        dispatch(productSlider_get())
        dispatch(home_slider_get())
        dispatch(product_category_get())
        console.clear()
    }, []);

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
                        <i><BsFillCheckCircleFill /></i>
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
                <Briliant/>
                <Row className='mt-3'>
                    <Carousel interval={1000} pause={"hover"}>
                        {
                            homeBannerDataMain?.map((item) => {
                                return (
                                    <Carousel.Item key={item.id}>
                                        <div className={css.sliderDiv} key={item.id}>
                                            <Col lg={5} md={6} xs={12}>
                                                <div className={css.mataniDivs}>
                                                    <img src={item.image} alt="image"/>
                                                </div>
                                            </Col>
                                            <Col lg={6} xs={12} md={6}>
                                                <div className={css.divTextMatani}>
                                                    <div className={css.mataniText}>
                                                        <h3>{ localStorage.getItem("lang") == "am" && item.titleHy}</h3>
                                                        <h3>{ localStorage.getItem("lang") == "ru" && item.titleRu}</h3>
                                                        <h3>{ localStorage.getItem("lang") == "en" && item.titleEn}</h3>
                                                        <p>{ localStorage.getItem("lang") == "am"&& item.textHy}</p>
                                                        <p>{ localStorage.getItem("lang") == "ru"&& item.textRu}</p>
                                                        <p>{ localStorage.getItem("lang") == "en" && item.textEn}</p>

                                                        <button> <Link to={'/about'}>
                                                            {t("seeMore")}
                                                        </Link> </button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </Row>
                <Row className={`${css.homeBox} justify-content-md-center`}>
                    <Col lg={12} md={12} xs={12}>`
                        <div className={css.divNewProduct}>
                            <div>
                                <h3>{t("colections")}</h3>
                                <img src={Brialiant} alt="image"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <HomeSlider sliderDataMain={categories}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={12} md={12} xs={12}>`
                        <div className={css.divNewProduct}>
                            <div>
                                <h3>{t("newProducts")}</h3>
                                <img src={Brialiant} alt="image"/>
                            </div>
                        </div>
                    </Col>
                    <NewProduct data={sliderDataMain}/>
                </Row>
            </Container>
            <div className={css.brMian}>
                <BriliantBg/>
            </div>
            <div className={css.newsletter}>
                <div>
                    <h3>{t("newsletter")}</h3>
                    <p>{t("getEmail")}</p>
                    <Formik
                        initialValues={{email: ''}}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                axios.post(`${backUrl}/api/v1/subscribers`, values)
                                    .then(function (response) {
                                        if (response.status == 200) {
                                            setModalShow(true)
                                            values.email = ''
                                        }
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                                setSubmitting(false);
                            }, 100);
                        }}
                    >
                        {({
                              values,
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
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder={t("email")}
                                    />
                                    <button type="submit" disabled={isSubmitting}>
                                        {t("send")}
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    );
};

export default Home;