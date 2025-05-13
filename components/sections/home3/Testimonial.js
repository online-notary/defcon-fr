'use client'
import React from 'react'
import VideoPopup from "@/components/elements/VideoPopup"
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
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
        },
    }
}

export default function Testimonial() {
    return (
        <> 

            <section className="testimonial-style-three bg-color-4">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="video-inner" style={{ backgroundImage: "url(assets/images/background/video-bg.jpg)" }}>
                            <div className="video-btn">
                                <VideoPopup />
                            </div>
                            <div className="icon-box"><i className="icon-left-quote"></i></div>
                        </div>
                        <div className="testimonial-content">
                            <div className="sec-title">
                                <div className="icon-box">
                                    <i className="icon-police"></i>
                                    <div className="shape-box">
                                        <div className="shape shape-1"></div>
                                        <div className="shape shape-2"></div>
                                    </div>
                                </div>
                                <h2>Words from clients</h2>
                            </div>
                            <Swiper {...swiperOptions} className="swiper-container single-item-carousel">
                                <SwiperSlide>
                                    <div className="inner-box">
                                        <div className="text">
                                            <p>Your service was excellent & security guard was phenomenal. Really appreciate all the help and we will ask for your assistance in the future & recommend you to others.</p>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                            <h4>Raff Leonard,</h4>
                                            <span className="designation">The Craftworks, CEO</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-box">
                                        <div className="text">
                                            <p>Your service was excellent & security guard was phenomenal. Really appreciate all the help and we will ask for your assistance in the future & recommend you to others.</p>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                            <h4>Raff Leonard,</h4>
                                            <span className="designation">The Craftworks, CEO</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-box">
                                        <div className="text">
                                            <p>Your service was excellent & security guard was phenomenal. Really appreciate all the help and we will ask for your assistance in the future & recommend you to others.</p>
                                        </div>
                                        <div className="author-box">
                                            <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                            <h4>Raff Leonard,</h4>
                                            <span className="designation">The Craftworks, CEO</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="slider-nav">
                                <div className="swiper-button-prev">
                                    <i className="fal fa-long-arrow-left"></i>
                                </div>
                                <div className="swiper-button-next">
                                    <i className="fal fa-long-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
