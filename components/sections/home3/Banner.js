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

            <section className="banner-section style-three">
                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-7.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h3>We are leader in</h3>
                                    <h2>Protecting</h2>
                                    <p>Professional discretion security for a changing world Nothing less than the best.</p>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn">Read More</Link></div>
                                </div> 
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-8.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h3>Professional with</h3>
                                    <h2>Experience</h2>
                                    <p>Professional discretion security for a changing world Nothing less than the best.</p>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn">Read More</Link></div>
                                </div> 
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-9.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h3>Total security at</h3>
                                    <h2>Affordability</h2>
                                    <p>Professional discretion security for a changing world Nothing less than the best.</p>
                                    <div className="btn-box"><Link href="/index-3" className="theme-btn">Read More</Link></div>
                                </div> 
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="slider-nav">
                        <div className="swiper-button-prev">
                            <i className="fas fa-angle-left"></i>
                        </div>
                        <div className="swiper-button-next">
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                </Swiper>
                <div className="banner-bottom">
                    <div className="auto-container">
                        <div className="inner-content">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                    <div className="single-item">
                                        <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/column-bg-2.jpg)" }}>
                                            <div className="icon-box"><i className="icon-calculator"></i></div>
                                            <h3>Low rates, No contarct</h3>
                                            <h5><Link href="/index-3">Get your free quote</Link></h5>
                                            <div className="link"><Link href="/index-3"><i className="icon-right-arrow-1"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                    <div className="single-item">
                                        <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/column-bg-3.jpg)" }}>
                                            <div className="icon-box"><i className="icon-calendar"></i></div>
                                            <h3>Strong team to secure</h3>
                                            <h5><Link href="/index-3">Make an appointment</Link></h5>
                                            <div className="link"><Link href="/index-3"><i className="icon-right-arrow-1"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
