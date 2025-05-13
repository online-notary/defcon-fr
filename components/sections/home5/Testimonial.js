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

            <section className="testimonial-style-five bg-color-3 sec-pad">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/testimonial-bg-3.jpg)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_11">
                                <div className="content-box wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="text">
                                        <h3>Make an Appointment</h3>
                                        <p>Request a book your appointment with our experts, We will get back to you ASAP.</p>
                                    </div>
                                    <form action="index-5.html" method="post" className="appointment-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Your name" required=""/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Your Email" required=""/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <i className="far fa-calendar"></i>
                                                <input type="text" name="date" placeholder="Date" id="datepicker"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <i className="far fa-clock"></i>
                                                <input type="text" name="time" placeholder="Time"/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <input type="text" name="address" placeholder="Address" required=""/>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Message..."></textarea>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <button type="submit" className="theme-btn">Get a Quote</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_12">
                                <div className="content-box">
                                    <div className="sec-title-two light">
                                        <p>Testimonials</p>
                                        <h2>What our customers say about us</h2>
                                    </div>
                                    <div className="text">
                                        <p>Teachings of the great explorer of the truth, the master-builder of human happiness dislikes, or avoids pleasure.</p>
                                        <a href="index-5.html" className="link">View All Reviews<i className="fas fa-angle-right"></i></a>
                                    </div>
                                    <Swiper {...swiperOptions} className="swiper-container single-item-carousel">
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
                                                    <figure className="image-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                                    <p>Blackcats service team is very prompt, courteous and profes- sional. They are committed to doing a quality job & the service and we recommend you to our friends.</p>
                                                    <h4>Raff Leonard, <span>The Craftworks, Founder</span></h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <div className="slider-nav">
                                            <div className="swiper-button-prev">
                                                <span>Prev</span><i className="fal fa-long-arrow-left"></i>
                                            </div>
                                            <div className="swiper-button-next">
                                                <i className="fal fa-long-arrow-right"></i><span>Next</span>
                                            </div>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
