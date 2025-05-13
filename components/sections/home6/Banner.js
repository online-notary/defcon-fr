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

            <section className="banner-section style-six">
                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-16.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h4>Welcome to blackcats</h4>
                                    <h2>Let’s start conserving energy</h2>
                                    <p>Professional discretion security for a changing world <br />Nothing less than the best.</p>
                                    <div className="btn-box">
                                        <Link href="/index-6" className="theme-btn style-one">Read More</Link>
                                        <Link href="/service" className="banner-btn-two">Our Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-14.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h4>Welcome to blackcats</h4>
                                    <h2>Let’s start conserving energy</h2>
                                    <p>Professional discretion security for a changing world <br />Nothing less than the best.</p>
                                    <div className="btn-box">
                                        <Link href="/index-6" className="theme-btn style-one">Read More</Link>
                                        <Link href="/service" className="banner-btn-two">Our Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-15.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <h4>Welcome to blackcats</h4>
                                    <h2>Let’s start conserving energy</h2>
                                    <p>Professional discretion security for a changing world <br />Nothing less than the best.</p>
                                    <div className="btn-box">
                                        <Link href="/index-6" className="theme-btn style-one">Read More</Link>
                                        <Link href="/service" className="banner-btn-two">Our Services</Link>
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
