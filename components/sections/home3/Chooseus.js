'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 4,
        },
    }
}

export default function Chooseus() {
    return (
        <> 

            <section className="chooseus-section sec-pad bg-color-3">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                <div className="auto-container">
                    <div className="sec-title light">
                        <div className="icon-box">
                            <i className="icon-police"></i>
                            <div className="shape-box">
                                <div className="shape shape-1"></div>
                                <div className="shape shape-2"></div>
                            </div>
                        </div>
                        <h2>World's rich & famous trust <br />our bodyguards</h2>
                    </div>
                    <div className='inner-container'>
                        <Swiper {...swiperOptions} className="swiper-container four-item-carousel">
                            <SwiperSlide>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-winner"></i></div>
                                        <h4>#1 company</h4>
                                        <p>To take a trivial example us ever undertakes laborious exercise except.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-guard"></i></div>
                                        <h4>Trained Guards</h4>
                                        <p>Must explain to you how all this mistaken idea of  pain give you complete.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-badge"></i></div>
                                        <h4>Top Notch</h4>
                                        <p>The great explorer of the truth the master-builders off human happiness.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-24-hours1"></i></div>
                                        <h4>24-Hour Service</h4>
                                        <p>Do not know how to pleasure rationally encounter tremely painful.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-winner"></i></div>
                                        <h4>#1 company</h4>
                                        <p>To take a trivial example us ever undertakes laborious exercise except.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-guard"></i></div>
                                        <h4>Trained Guards</h4>
                                        <p>Must explain to you how all this mistaken idea of  pain give you complete.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-badge"></i></div>
                                        <h4>Top Notch</h4>
                                        <p>The great explorer of the truth the master-builders off human happiness.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="light-icon"><i className="icon-shield"></i></div>
                                        <div className="icon-box"><i className="icon-24-hours1"></i></div>
                                        <h4>24-Hour Service</h4>
                                        <p>Do not know how to pleasure rationally encounter tremely painful.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="slider-nav">
                            <div className="swiper-button-prev">
                                <i className="fas fa-angle-left"></i>
                            </div>
                            <div className="swiper-button-next">
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
