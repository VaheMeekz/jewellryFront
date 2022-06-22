import React, {useEffect} from 'react';
import css from './contact.module.css';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Briliant from "../Briliant";
import {Formik} from "formik";
import Tel from '../../Images/tel.svg';
import Sms from '../../Images/sms.svg';
import World from '../../Images/world.svg';
import Clock from '../../Images/world.svg';
import axios from "axios";
import {backUrl} from "../../Config/keys";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {contact_get} from "../../Redux/Actions/home.action";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = React.useState(false);
    const dataContact = useSelector(state => state.homeReducer.contactData);

    useEffect(() => {
       dispatch(contact_get())
        console.clear()
    },[])

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
                <Briliant/>
                <Row className="justify-content-md-center">
                    <Col lg={12} xs={12} md={12}>
                        <div className={css.titleDiv}>
                            <h1>{t("cuntactUs")}</h1>
                        </div>
                    </Col>
                    <Col lg={5} md={12} xs={12}>
                        <Formik
                            initialValues={{subject: '', name: '', email: "", message: ""}}
                            validate={values => {
                                const errors = {};
                                if (!values.subject) {
                                    errors.subject = '*';
                                } else if (!values.name) {
                                    errors.name = '*';
                                } else if (!values.email) {
                                    errors.email = '*';
                                } else if (!values.message) {
                                    errors.message = '*';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    axios.post(`${backUrl}/api/v1/contactUs`, {
                                        subject: values.subject,
                                        name: values.name,
                                        email: values.email,
                                        message: values.message
                                    })
                                        .then(function (response) {
                                            if (response.status == 200) {
                                                setModalShow(true)
                                                values.name = ''
                                                values.email = ''
                                                values.subject = ''
                                                values.message = ''
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
                                    <h1 className={css.title}>Get in touch !!!</h1>
                                    <div className={css.contOne}>
                                        <input
                                            type="text"
                                            name="subject"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.subject}
                                            placeholder={t("subject")}
                                        />
                                        <span>
                                            {errors.subject && touched.subject && errors.subject}
                                        </span>
                                    </div>
                                    <div className={css.contTwo}>
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                placeholder={t("name")}
                                            />
                                            <span>
                                            {errors.name && touched.name && errors.name}
                                            </span>
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                placeholder={t("email")}
                                            />
                                            <span>
                                            {errors.email && touched.email && errors.email}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={css.contThree}>
                                        <input
                                            type="text"
                                            name="message"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                            placeholder={t("message")}
                                        />
                                        <span>
                                        {errors.message && touched.message && errors.message}
                                        </span>
                                    </div>
                                    <div className={css.contBtn}>
                                        <button type="submit" disabled={isSubmitting}>
                                            {t("send")}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </Col>
                    <Col lg={5} md={12} xs={12}>
                        <div className={css.mainDivs}>
                            <div className={css.divsData}>
                                <img src={Tel} alt=""/>
                                <div>
                                    <h5>{t("call")}</h5>
                                    <p>{dataContact[0]?.phone}</p>
                                </div>
                            </div>
                            <div className={css.divsData}>
                                <img src={Sms} alt=""/>
                                <div>
                                    <h5>{t("message")}</h5>
                                    <p>{dataContact[0]?.email}</p>
                                </div>
                            </div>
                            <div className={css.divsData}>
                                <img src={World} alt=""/>
                                <div>
                                    <h5>{t("location")}</h5>
                                    <p>{dataContact[0]?.location}</p>
                                </div>
                            </div>
                            <div className={css.divsData}>
                                <img src={Clock} alt=""/>
                                <div>
                                    <h5>{t("work")}</h5>
                                    <p>{t("moday")} 09:00-20:00</p>
                                    <p>{t("sunday")} 10:00-18:00</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={css.mapMain}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.13196328252!2d-117.90192188484731!3d33.6018803487758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce06b696a474f%3A0xd934a9d328e15f00!2zMTIzIE1haW4gU3QsIE5ld3BvcnQgQmVhY2gsIENBIDkyNjYxLCDQodCo0JA!5e0!3m2!1sru!2s!4v1654845896952!5m2!1sru!2s"
                    width="100%"
                    height="450"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                />
            </div>
        </div>
    );
};

export default Contact;