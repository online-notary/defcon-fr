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

            <section className="banner-section style-five">
                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-13.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                                        <div className="banner-content">
                                            <h5>Ideal choice for</h5>
                                            <h2>High security locks</h2>
                                            <p>Professional discretion security for a changing world Nothing less than the best.</p>
                                            <div className="btn-box">
                                                <Link href="/index-5" className="theme-btn">Read More</Link>
                                                <Link href="/index-5" className="theme-btn banner-btn">Request Demo</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-14.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                                        <div className="banner-content">
                                            <h5>Strong, friendly & reliable for</h5>
                                            <h2>All your security needs</h2>
                                            <p>Professional discretion security for a changing world Nothing less than the best.</p>
                                            <div className="btn-box">
                                                <Link href="/index-5" className="theme-btn">Read More</Link>
                                                <Link href="/index-5" className="theme-btn banner-btn">Get a Quote</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-15.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                                        <div className="banner-content">
                                            <h5>Protect at any cost</h5>
                                            <h2>The future of Security</h2>
                                            <p>Professional discretion security for a changing world Nothing less than the best.</p>
                                            <div className="btn-box">
                                                <Link href="/index-5" className="theme-btn">Read More</Link>
                                                <Link href="/index-5" className="theme-btn banner-btn">Get a Quote</Link>
                                            </div>
                                        </div>
                                    </div>
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
            </section>

        </>
    )
}
