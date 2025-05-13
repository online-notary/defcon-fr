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

            <section className="banner-section style-two centred">
                <div className="bg-shape" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-4.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <figure className="icon-box"><img src="assets/images/icons/icon-9.png" alt=""/></figure>
                                    <h3>Protect your workforce</h3>
                                    <h2>Cyber Security</h2>
                                    <p>Our modern access security is designed to safeguard all users</p>
                                    <div className="btn-box">
                                        <Link href="/index-2" className="theme-btn">Read More</Link>
                                        <Link href="/index-2" className="theme-btn banner-btn">Request Demo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-5.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <figure className="icon-box"><img src="assets/images/icons/icon-9.png" alt=""/></figure>
                                    <h3>Trustable place for</h3>
                                    <h2>Threat Prevented</h2>
                                    <p>Desires to obtain pain of itself because it is pain but because occasionally</p>
                                    <div className="btn-box">
                                        <Link href="/index-2" className="theme-btn">Read More</Link>
                                        <Link href="/index-2" className="theme-btn banner-btn">Request Demo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <figure className="icon-box"><img src="assets/images/icons/icon-9.png" alt=""/></figure>
                                    <h3>Committing to provide</h3>
                                    <h2>Utmost Security</h2>
                                    <p>Our modern access security is designed to safeguard all users</p>
                                    <div className="btn-box">
                                        <Link href="/index-2" className="theme-btn">Read More</Link>
                                        <Link href="/index-2" className="theme-btn banner-btn">Request Demo</Link>
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
