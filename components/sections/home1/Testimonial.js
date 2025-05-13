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
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}

export default function Testimonial() {
    return (
        <> 

            <section className="testimonial-section centred sec-pad bg-color-1">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <div className="top-title">
                            <div className="shape">
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape-5.png)" }}></div>
                            </div>
                            <p>Testimonials</p>
                        </div>
                        <h2>What our customers say about <br />our service</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container three-item-carousel">
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="quote-icon"><i className="icon-left-quote"></i></div>
                                    <h4>Raff Leonard</h4>
                                    <span className="designation">The Craftworks, Founder</span>
                                    <p>Blackcats service team is very prompt, courteous and professional. They are committed to doing a quality job & the service</p>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="quote-icon"><i className="icon-left-quote"></i></div>
                                    <h4>Lamont Shaun</h4>
                                    <span className="designation">The Humming Tree ,Manager</span>
                                    <p>We have been using the security system of blackcats from past 5 years, which is working fine without any issues & good service.</p>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="quote-icon"><i className="icon-left-quote"></i></div>
                                    <h4>Xavier Winston</h4>
                                    <span className="designation">California</span>
                                    <p>I have the pleasure of dealing with blackcats team for the past one plus years. The team has been efficient, very knowledgeable.</p>
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
