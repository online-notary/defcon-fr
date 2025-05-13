'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-dots-style-one',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
}

export default function Banner() {
    return (
        <> 

            <section className="banner-section">
                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                                        <div className="content-box">
                                            <h2>Blackcats <br />for all of your security needs.</h2>
                                            <p>Professional discretion security for a changing world Nothing less than the best.</p>
                                            <div className="btn-box"><Link href="/" className="theme-btn style-one">Read More</Link></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item style-two">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                                        <div className="content-box">
                                            <h2>Leader in <br />protecting people and places.</h2>
                                            <p>How all this mistaken idea of denouncing pleasure and praising pain was born and you .</p>
                                            <div className="btn-box"><Link href="service.html" className="theme-btn style-one">Our Services</Link></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-3.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-xl-7 col-lg-12 col-md-12 content-column">
                                        <div className="content-box">
                                            <h2>The ultimate <br />choice for trustable security service.</h2>
                                            <p>To take a trivial example, which of us ever undertakes laborious physical exerciseexcept to obtain some.</p>
                                            <div className="btn-box"><Link href="/" className="theme-btn style-one">Read More</Link></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className='swiper-dots-style-one'></div>
                    <div className="slider-nav">
                        <div className="swiper-button-prev">
                            <i className="fas fa-angle-left"></i>
                        </div>
                        <div className="swiper-button-next">
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
