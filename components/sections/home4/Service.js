'use client'
import React from 'react'
import Link from "next/link"
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

export default function Service() {
    return (
        <> 

            <section className="service-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>Our Services</p>
                        <h2>High quality products and services <br />that we stand behind</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container three-item-carousel">
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-7.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-lights"></i></div>
                                        <span className="category">Service</span>
                                        <h3>Control Lighting</h3>
                                        <div className="link"><Link href="/service-details">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">01</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-lights"></i></div>
                                        <span className="category">Service</span>
                                        <h3><Link href="/service-details">Control Lighting</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">01</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-8.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-heating"></i></div>
                                        <span className="category">Service</span>
                                        <h3>Adjust Climate</h3>
                                        <div className="link"><Link href="/service-details-2">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">02</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-heating"></i></div>
                                        <span className="category">Service</span>
                                        <h3><Link href="/service-details-2">Adjust Climate</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details-2">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">02</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-9.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-sun-energy"></i></div>
                                        <span className="category">Service</span>
                                        <h3>Use Eco Energy</h3>
                                        <div className="link"><Link href="/service-details-3">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">03</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-sun-energy"></i></div>
                                        <span className="category">Service</span>
                                        <h3><Link href="/service-details-3">Use Eco Energy</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details-3">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">03</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-7.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-lights"></i></div>
                                        <span className="category">Service</span>
                                        <h3>Control Lighting</h3>
                                        <div className="link"><Link href="/service-details">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">01</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-lights"></i></div>
                                        <span className="category">Service</span>
                                        <h3><Link href="/service-details">Control Lighting</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">01</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-8.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-heating"></i></div>
                                        <span className="category">Service</span>
                                        <h3>Adjust Climate</h3>
                                        <div className="link"><Link href="/service-details-2">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">02</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-heating"></i></div>
                                        <span className="category">Service</span>
                                        <h3><Link href="/service-details-2">Adjust Climate</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details-2">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">02</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-9.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-sun-energy"></i></div>
                                        <span className="category">Service</span>
                                        <h3>Use Eco Energy</h3>
                                        <div className="link"><Link href="/service-details-3">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">03</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-sun-energy"></i></div>
                                        <span className="category">Service</span>
                                        <h3><Link href="/service-details-3">Use Eco Energy</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details-3">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">03</span>
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
