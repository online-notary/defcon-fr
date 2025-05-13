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

            <section className="service-style-two sec-pad bg-color-3 centred" style={{ backgroundImage: "url(assets/images/background/service-bg.jpg)" }}>
                <div className="auto-container">
                    <div className="sec-title-two centred">
                        <p>Our Services</p>
                        <h2>High quality products and services <br />that we stand behind</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container three-item-carousel">
                        <SwiperSlide>
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/service-bg-1.jpg)" }}></div>
                                    <figure className="icon-box">
                                        <img src="assets/images/icons/icon-12.png" alt=""/>
                                        <Link href="/service-details"><i className="fas fa-angle-right"></i></Link>
                                    </figure>
                                    <h3><Link href="/service-details">Cyber Consulting</Link></h3>
                                    <p>These cases perfectly simple and easy to distinguish in a free hour our power of choice.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/service-bg-1.jpg)" }}></div>
                                    <figure className="icon-box">
                                        <img src="assets/images/icons/icon-13.png" alt=""/>
                                        <Link href="/service-details"><i className="fas fa-angle-right"></i></Link>
                                    </figure>
                                    <h3><Link href="/service-details">Penetration Testing</Link></h3>
                                    <p>The claims off duty or that all obligations of business it will frequently occur that pleasures.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/service-bg-1.jpg)" }}></div>
                                    <figure className="icon-box">
                                        <img src="assets/images/icons/icon-14.png" alt=""/>
                                        <Link href="/service-details"><i className="fas fa-angle-right"></i></Link>
                                    </figure>
                                    <h3><Link href="/service-details">Security Monitoring</Link></h3>
                                    <p>The wise man therefore always holds in these matters to this principle of selection rejects.</p>
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
