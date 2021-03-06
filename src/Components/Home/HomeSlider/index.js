import React from 'react';
import css from './homeSlider.module.css';
import Slider from "react-slick";
import ArrowLeft from '../../../Images/arrowSliderLeft.png';
import ArrowRigth from '../../../Images/arrowSliderRigth.png';
import {useNavigate} from "react-router-dom";
const HomeSlider = ({sliderDataMain}) => {
    const navigate = useNavigate()
    const NextArrow = (props) => {
        const {onClick} = props;
        return (
            <div className={css.nextArrow} onClick={onClick}>
                <img src={ArrowRigth} className={css.slide_arrow} alt=""/>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <div className={css.prevArrow} onClick={onClick}>
                <img src={ArrowLeft} className={css.slide_arrow} alt=""/>
            </div>
        );
    };
    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    nextArrow: false,
                    prevArrow: false,
                    autoplay: true,
                    speed: 2500,
                    autoplaySpeed: 2000,
                },
            },
        ],
    };


    return (
        <div className={css.sliderSlid}>
            {
                sliderDataMain.length > 3 ? <Slider {...settings}>
                        {
                            sliderDataMain?.map((item) => {
                                return (
                                        <div key={item.id} className={css.divSLider} onClick={()=>navigate('/products')}>
                                            <div>
                                                <h3>{ localStorage.getItem("lang") == "am"&& item.nameHy}</h3>
                                                <h3>{ localStorage.getItem("lang") == "ru" && item.nameRu}</h3>
                                                <h3>{ localStorage.getItem("lang") == "en" && item.nameEn}</h3>
                                                <img src={item.image} alt="image"/>
                                            </div>
                                        </div>
                                )
                            })
                        }
                </Slider> : <div className={css.divLengthFlex}>
                    {
                        sliderDataMain?.map((item) => {
                            return (
                                    <div key={item.id} className={css.divSLiderLength}>
                                        <div>
                                            <h3>{ localStorage.getItem("lang") == "am"&& item.nameHy}</h3>
                                            <h3>{ localStorage.getItem("lang") == "ru" && item.nameRu}</h3>
                                            <h3>{ localStorage.getItem("lang") == "en" && item.nameEn}</h3>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

export default HomeSlider;