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
                    <div className="sec-title centred">
                        <div className="top-title">
                            <div className="shape">
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                                <div className="line line-4"></div>
                                <div className="bg-shape" style={{ backgroundImage: "url(assets/images/icons/bg-shape.png)" }}></div>
                            </div>
                            <p>Our Services</p>
                        </div>
                        <h2>High quality products and services <br />that we stand behind</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container three-item-carousel">
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-1.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-install"></i></div>
                                        <span className="category">cctv</span>
                                        <h3>Install & Configure</h3>
                                        <div className="link"><Link href="/service-details">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">01</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-install"></i></div>
                                        <span className="category">cctv</span>
                                        <h3><Link href="/service-details">Install & Configure</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">01</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-2.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-support"></i></div>
                                        <span className="category">cctv</span>
                                        <h3>Repair & Service</h3>
                                        <div className="link"><Link href="/service-details-2">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">02</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-support"></i></div>
                                        <span className="category">cctv</span>
                                        <h3><Link href="/service-details-2">Repair & Service</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details-2">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">02</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-one">
                                <div className="inner-box" style={{ backgroundImage: "url(assets/images/service/service-3.jpg)" }}>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon-toolbox"></i></div>
                                        <span className="category">cctv</span>
                                        <h3>Maintenance</h3>
                                        <div className="link"><Link href="/service-details-3">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">03</span>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="icon-box"><i className="icon-toolbox"></i></div>
                                        <span className="category">cctv</span>
                                        <h3><Link href="/service-details-3">Maintenance</Link></h3>
                                        <p>These cases are perfectly simple and easy to distinguish a free hour.</p>
                                        <div className="btn-box"><Link href="/service-details-3">Read More<i className="fas fa-angle-right"></i></Link></div>
                                        <span className="count">03</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className='swiper-dots-style-one'></div>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
