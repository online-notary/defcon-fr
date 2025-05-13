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
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    }
}

export default function Testimonial() {
    return (
        <> 

            <section className="testimonial-style-four sec-pad" style={{ backgroundImage: "url(assets/images/background/testimonial-bg-2.jpg)" }}>
                <div className="auto-container">
                    <div className="sec-title-two light">
                        <p>Testimonials</p>
                        <h2>What our customers say</h2>
                    </div>
                    <div className="inner-container">
                        <Swiper {...swiperOptions} className="swiper-container two-column-carousel">
                            <SwiperSlide>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-quote"></i></div>
                                        <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <p>Blackcats service team is very prompt, courteous and profes- sional. They are committed to doing a quality job & the service and we recommend you to our friends.</p>
                                        <h4>Raff Leonard, <span>The Craftworks, Founder</span></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-quote"></i></div>
                                        <figure className="image-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                        <p>We have been using the security system of blackcats from past 5 years, which is working fine without any issues & good ser- vice. your employees are very professional.</p>
                                        <h4>Lamont Shaun, <span>Humming Tree, Manager</span></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-quote"></i></div>
                                        <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <p>Blackcats service team is very prompt, courteous and profes- sional. They are committed to doing a quality job & the service and we recommend you to our friends.</p>
                                        <h4>Raff Leonard, <span>The Craftworks, Founder</span></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-quote"></i></div>
                                        <figure className="image-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                        <p>We have been using the security system of blackcats from past 5 years, which is working fine without any issues & good ser- vice. your employees are very professional.</p>
                                        <h4>Lamont Shaun, <span>Humming Tree, Manager</span></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-quote"></i></div>
                                        <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <p>Blackcats service team is very prompt, courteous and profes- sional. They are committed to doing a quality job & the service and we recommend you to our friends.</p>
                                        <h4>Raff Leonard, <span>The Craftworks, Founder</span></h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-quote"></i></div>
                                        <figure className="image-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                        <p>We have been using the security system of blackcats from past 5 years, which is working fine without any issues & good ser- vice. your employees are very professional.</p>
                                        <h4>Lamont Shaun, <span>Humming Tree, Manager</span></h4>
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
