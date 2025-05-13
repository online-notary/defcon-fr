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

    // Pagination
    pagination: {
        el: '.swiper-dots-style-one',
        clickable: true,
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

            <section className="testimonial-style-six centred">
                <div className="bg-layer"></div>
                <div className="auto-container">
                    <div className="sec-title-three centred">
                        <div className="icon-box"><i className="icon-efficiency"></i></div>
                        <h2>What our customers say</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container banner-carousel">
                        <SwiperSlide>
                            <div className="testimonial-inner">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                            <h4>Raff Leonard</h4>
                                            <span className="designation">The Craftworks, Founder</span>
                                            <p>Blackcats service team is very prompt, courteous and professional. They are committed to doing a quality job & the service</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                            <h4>Lamont Shaun</h4>
                                            <span className="designation">The Humming Tree ,Manager</span>
                                            <p>We have been using the security system of blackcats from past 5 years, which is working fine without any issues & good service.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                            <h4>Xavier Winston</h4>
                                            <span className="designation">California</span>
                                            <p>I have the pleasure of dealing with blackcats team for the past one plus years. The team has been efficient, very knowledgeable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-inner">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                            <h4>Raff Leonard</h4>
                                            <span className="designation">The Craftworks, Founder</span>
                                            <p>Blackcats service team is very prompt, courteous and professional. They are committed to doing a quality job & the service</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                            <h4>Lamont Shaun</h4>
                                            <span className="designation">The Humming Tree ,Manager</span>
                                            <p>We have been using the security system of blackcats from past 5 years, which is working fine without any issues & good service.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                            <h4>Xavier Winston</h4>
                                            <span className="designation">California</span>
                                            <p>I have the pleasure of dealing with blackcats team for the past one plus years. The team has been efficient, very knowledgeable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-inner">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                            <h4>Raff Leonard</h4>
                                            <span className="designation">The Craftworks, Founder</span>
                                            <p>Blackcats service team is very prompt, courteous and professional. They are committed to doing a quality job & the service</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                            <h4>Lamont Shaun</h4>
                                            <span className="designation">The Humming Tree ,Manager</span>
                                            <p>We have been using the security system of blackcats from past 5 years, which is working fine without any issues & good service.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 testimonial-block">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                            <h4>Xavier Winston</h4>
                                            <span className="designation">California</span>
                                            <p>I have the pleasure of dealing with blackcats team for the past one plus years. The team has been efficient, very knowledgeable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
