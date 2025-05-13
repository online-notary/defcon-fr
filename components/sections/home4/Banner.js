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

            <section className="banner-section style-four">
                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-10.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <h2>An effort to <br />make a secure home</h2>
                                            <p>Our power of choice is untrammelled and when nothing prevents <br />our being able to do what we like best.</p>
                                            <div className="btn-box">
                                                <Link href="/index-4" className="theme-btn">Read More</Link>
                                                <Link href="/service" className="theme-btn banner-btn">Our Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-11.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6 content-column">
                                        <div className="content-box">
                                            <h2>Join hands <br />with technology</h2>
                                            <p>Indignation and dislike men who are beguiled demoralized <br />charms of pleasure of the moment.</p>
                                            <div className="btn-box">
                                                <Link href="/index-4" className="theme-btn">Read More</Link>
                                                <Link href="/service" className="theme-btn banner-btn">Our Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-12.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="row clearfix">
                                    <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <h2>Keeping up with your comfort</h2>
                                            <p>Professional discretion security for a changing world <br />Nothing less than the best.</p>
                                            <div className="btn-box">
                                                <Link href="/index-4" className="theme-btn">Read More</Link>
                                                <Link href="/service" className="theme-btn banner-btn">Our Services</Link>
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
